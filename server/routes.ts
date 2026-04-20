import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const applicationSchema = z.object({
  name: z.string().trim().min(1).max(120),
  age: z.number().int().min(1).max(120),
  affiliation: z.string().trim().max(200).nullable().optional(),
  reason: z.string().trim().min(10).max(2000),
  laptopAcknowledged: z.literal(true),
});

type Application = z.infer<typeof applicationSchema> & {
  id: string;
  receivedAt: string;
};

const applications: Application[] = [];

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
  app.post("/api/applications", (req: Request, res: Response) => {
    const parsed = applicationSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        error: "Invalid application",
        issues: parsed.error.flatten(),
      });
    }
    const record: Application = {
      ...parsed.data,
      id: crypto.randomUUID(),
      receivedAt: new Date().toISOString(),
    };
    applications.push(record);
    console.log(
      `[applications] received ${record.id} from ${record.name} (${applications.length} total)`
    );
    return res.status(201).json({ ok: true, id: record.id });
  });

  app.get("/api/applications/_count", (_req, res) => {
    res.json({ count: applications.length });
  });

  app.get("/api/applications", requireAdmin, (_req, res) => {
    res.json({
      count: applications.length,
      applications: [...applications].sort((a, b) =>
        b.receivedAt.localeCompare(a.receivedAt)
      ),
    });
  });

  app.get("/api/applications.csv", requireAdmin, (_req, res) => {
    const escape = (v: string | number | null | undefined) => {
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
    const rows = [...applications]
      .sort((a, b) => b.receivedAt.localeCompare(a.receivedAt))
      .map((a) =>
        [
          a.id,
          a.receivedAt,
          a.name,
          a.age,
          a.affiliation ?? "",
          a.reason,
          a.laptopAcknowledged,
        ]
          .map(escape)
          .join(",")
      );
    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="applications.csv"'
    );
    res.send([header.join(","), ...rows].join("\n"));
  });

  return httpServer;
}
