import { sql } from "drizzle-orm";
import { boolean, integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const applications = pgTable("applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  age: integer("age").notNull(),
  affiliation: text("affiliation"),
  reason: text("reason").notNull(),
  laptopAcknowledged: boolean("laptop_acknowledged").notNull(),
  receivedAt: timestamp("received_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Application = typeof applications.$inferSelect;

export const insertApplicationSchema = z.object({
  name: z.string().trim().min(1).max(120),
  age: z.number().int().min(1).max(120),
  affiliation: z.string().trim().max(200).nullable().optional(),
  reason: z.string().trim().min(10).max(2000),
  laptopAcknowledged: z.literal(true),
});

export type InsertApplication = z.infer<typeof insertApplicationSchema>;
