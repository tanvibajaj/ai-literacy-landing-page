import type { Express, Request, Response, NextFunction } from "express";
import { type Server } from "http";
import { desc } from "drizzle-orm";
import { db } from "./db";
import { applications, insertApplicationSchema } from "@shared/schema";

export const APPLICATION_DEADLINE = new Date("2026-05-06T23:59:59-07:00");

export function applicationsClosed(now: Date = new Date()): boolean {
  return now.getTime() > APPLICATION_DEADLINE.getTime();
}

function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const expected = process.env.ADMIN_TOKEN;
  if (!expected) {
    return res.status(503).json({
      error:
        "Admin access is not configured. Set ADMIN_TOKEN in the environment to enable viewing applications.",
    });
  }
  const provided =
    (req.query.token as string | undefined) ??
    req.header("x-admin-token") ??
    (req.header("authorization")?.startsWith("Bearer ")
      ? req.header("authorization")!.slice(7)
      : undefined);
  if (provided !== expected) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/event/status", (_req, res) => {
    res.json({
      deadline: APPLICATION_DEADLINE.toISOString(),
      closed: applicationsClosed(),
    });
  });

  app.post("/api/applications", async (req: Request, res: Response) => {
    if (applicationsClosed()) {
      return res.status(403).json({
        error: "Applications closed",
        message:
          "Applications closed on May 6, 2026. The event is on May 20, 2026.",
      });
    }
    const parsed = insertApplicationSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        error: "Invalid application",
        issues: parsed.error.flatten(),
      });
    }
    try {
      const [record] = await db
        .insert(applications)
        .values({
          name: parsed.data.name,
          age: parsed.data.age,
          affiliation: parsed.data.affiliation ?? null,
          reason: parsed.data.reason,
          laptopAcknowledged: parsed.data.laptopAcknowledged,
        })
        .returning();
      console.log(
        `[applications] received ${record.id} from ${record.name}`
      );
      return res.status(201).json({ ok: true, id: record.id });
    } catch (err) {
      console.error("[applications] insert failed", err);
      return res.status(500).json({ error: "Failed to save application" });
    }
  });

  app.get("/api/applications/_count", async (_req, res) => {
    try {
      const rows = await db.select().from(applications);
      res.json({ count: rows.length });
    } catch {
      res.status(500).json({ error: "Failed to count applications" });
    }
  });

  app.get("/api/applications", requireAdmin, async (_req, res) => {
    try {
      const rows = await db
        .select()
        .from(applications)
        .orderBy(desc(applications.receivedAt));
      res.json({ count: rows.length, applications: rows });
    } catch (err) {
      console.error("[applications] list failed", err);
      res.status(500).json({ error: "Failed to list applications" });
    }
  });

  app.get("/api/applications.csv", requireAdmin, async (_req, res) => {
    try {
      const rows = await db
        .select()
        .from(applications)
        .orderBy(desc(applications.receivedAt));
      const escape = (v: unknown) => {
        const s = v === null || v === undefined ? "" : String(v);
        return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
      };
      const header = [
        "id",
        "receivedAt",
        "name",
        "age",
        "affiliation",
        "reason",
        "laptopAcknowledged",
      ];
      const csv = [
        header.join(","),
        ...rows.map((a) =>
          [
            a.id,
            a.receivedAt instanceof Date
              ? a.receivedAt.toISOString()
              : a.receivedAt,
            a.name,
            a.age,
            a.affiliation ?? "",
            a.reason,
            a.laptopAcknowledged,
          ]
            .map(escape)
            .join(",")
        ),
      ].join("\n");
      res.setHeader("Content-Type", "text/csv; charset=utf-8");
      res.setHeader(
        "Content-Disposition",
        'attachment; filename="applications.csv"'
      );
      res.send(csv);
    } catch (err) {
      console.error("[applications] csv failed", err);
      res.status(500).json({ error: "Failed to export CSV" });
    }
  });

  return httpServer;
}
