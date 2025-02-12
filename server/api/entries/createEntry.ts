import { analyzeEntry } from "~/server/ai/getAnalysis"
import { db } from "~/server/db/client"
import { journalEntries } from "~/server/db/schema"

export default defineEventHandler(async (event) => {
    const entry = await readBody(event)
    console.log(entry)
    const dbResult = await db.insert(journalEntries).values({ entryText: entry.data }).returning({
        insertedId: journalEntries.entryId
    })

    const analysis = await analyzeEntry(entry.data)
    console.log(analysis)


    console.log(dbResult)
    return dbResult[0]
})