import { db } from "~/server/db/client"
import { journalEntries } from "~/server/db/schema"

export default defineEventHandler(async (event) => {
    const entry = await readBody(event)
    console.log(entry)
    const dbResult = await db.insert(journalEntries).values({ entryText: entry.data })
    return dbResult
})