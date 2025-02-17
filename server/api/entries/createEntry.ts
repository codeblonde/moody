import { analyzeEntry } from "~/server/ai/getAnalysis"
import { db } from "~/server/db/client"
import { journalEntries, analysis } from "~/server/db/schema"

export default defineEventHandler(async (event) => {
    const entry = await readBody(event)
    console.log(entry)
    const dbResult = await db.insert(journalEntries).values({ entryText: entry.data }).returning({
        insertedId: journalEntries.entryId
    })


    if (!dbResult[0]?.insertedId) {
        throw new Error("Failed to insert journal entry");
    }

    const analysisAI = await analyzeEntry(entry.data)
    console.log(analysisAI)

    const analysisResult = await db.insert(analysis).values({ 
        analysisId: dbResult[0].insertedId,
        mood: analysisAI.mood,
        color: analysisAI.color,
        score: analysisAI.score,
        summary: analysisAI.summary,
        suggestion: analysisAI.suggestion,
    
        })

    console.log(dbResult)
    return dbResult[0]
})