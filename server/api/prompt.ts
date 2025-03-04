import { generatePrompt } from "../ai/getPrompt"
import { db } from "../db/client"
import { journalEntries } from "../db/schema"
import { desc, eq } from "drizzle-orm"

export default defineEventHandler(async (event) => {

    const lastEntry = await db
        .select({ entryText: journalEntries.entryText })
        .from(journalEntries)
        .orderBy(desc(journalEntries.createdAt)).limit(1)

    const entry = lastEntry[0].entryText

    const prompt = await generatePrompt(entry)
    return prompt?.prompt
})