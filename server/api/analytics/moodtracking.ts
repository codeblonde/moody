import { db } from "~/server/db/client"
import { analysis } from "~/server/db/schema"
import { desc } from 'drizzle-orm'



export default defineEventHandler(async (event) => {
    const result = await db.select({ 
        score: analysis.score,
        date: analysis.createdAt,
        color: analysis.color,
        mood: analysis.mood,
        summary: analysis.summary,
        })
        .from(analysis).orderBy(desc(analysis.createdAt)).limit(7)

    console.log(result)
    return result
  })

  