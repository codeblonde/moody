import { db } from "../db/client"
import { analysis, journalEntries } from "../db/schema"
import { desc, eq } from "drizzle-orm"

export default defineEventHandler(async (event) => {
    const result = await db.select({
      entryId: journalEntries.entryId,
      entryText: journalEntries.entryText,
      createdAt: journalEntries.createdAt,
      mood: analysis.mood,
  }).from(journalEntries)
    .orderBy(desc(journalEntries.createdAt))
    .leftJoin(analysis, eq(journalEntries.entryId, analysis.journalId))
    // console.log(result)
    return result
  })