import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";
import { datetime, timestamp } from "drizzle-orm/mysql-core"
import { blob, int, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const journalEntries = sqliteTable("journal_entries", 
  {
  entryId: text("entryId").primaryKey().$defaultFn(() => createId()),
  createdAt: text("createdAt").default(sql`(CURRENT_TIMESTAMP)`),
  entryText: text("entryText").notNull(),
});

const analysis = sqliteTable("analysis", 
  {
  analysisId: text().primaryKey().$defaultFn(() => createId()),
  createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
  mood: text().notNull(),
  score: int().notNull(),
  color: text().notNull(),
  suggestion: text().notNull(),
  summary: text().notNull()
  
});