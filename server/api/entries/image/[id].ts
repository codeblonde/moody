import { generateImage } from "~/server/ai/getImage"
import { eq } from "drizzle-orm"
import { db } from "~/server/db/client"
import { journalEntries } from "~/server/db/schema"

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    const result = await db
    .select({ entryText: journalEntries.entryText })
    .from(journalEntries)
    .where(eq(journalEntries.entryId, id));

    const entry = result[0].entryText
    console.log(result[0])
    console.log(entry)

    const imageUrl = await generateImage(entry) 
    console.log(imageUrl)
    return imageUrl

  })