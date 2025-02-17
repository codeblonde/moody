import { createId } from "@paralleldrive/cuid2";
import { sql, relations } from "drizzle-orm";
import { datetime, timestamp } from "drizzle-orm/mysql-core"
import { blob, int, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const journalEntries = sqliteTable("journal_entries", 
  {
  entryId: text("entryId").primaryKey().$defaultFn(() => createId()),
  createdAt: text("createdAt").default(sql`(CURRENT_TIMESTAMP)`),
  entryText: text("entryText").notNull(),
  // optional analysis link:
  // analysisId: text("analysisId").unique().references(() => analysis.analysisId, { onDelete: "cascade" })
});



export const analysis = sqliteTable("analysis", 
  {
  // analysisId: text().primaryKey().$defaultFn(() => createId()),
  analysisId: text("analysisId")
    .primaryKey()
    .references(() => journalEntries.entryId, { onDelete: "cascade" }), 
  // journalId: text('entryId').references(() => journalEntries.entryId),
  // createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
  mood: text().notNull(),
  score: int().notNull(),
  color: text().notNull(),
  suggestion: text().notNull(),
  summary: text().notNull()
  
});


export const journalRelations = relations(journalEntries, ({ one }) => ({
	analysis: one(analysis, {
    fields: [journalEntries.entryId],
    references: [analysis.analysisId],
  }),
}));

export const analysisRelations = relations(analysis, ({ one }) => ({
	entry: one(journalEntries, { 
    fields: [analysis.analysisId], 
    references: [journalEntries.entryId] 
  }),
}));