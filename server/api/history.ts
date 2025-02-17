import { db } from "../db/client"
import { journalEntries } from "../db/schema"

export default defineEventHandler(async (event) => {
    const result = await db.select().from(journalEntries)
    console.log(result[0])
    return result
  })