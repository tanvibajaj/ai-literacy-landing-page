import type { Express, Request, Response } from "express";
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

  return httpServer;
}
