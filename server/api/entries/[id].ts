import { eq } from "drizzle-orm"
import { db } from "~/server/db/client"
import { analysis, journalEntries } from "~/server/db/schema"

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    // fetch entry + analysis via left join
    const result = await db
    .select()
    .from(journalEntries)
    .leftJoin(analysis, eq(journalEntries.entryId, analysis.journalId))
    .where(eq(journalEntries.entryId, id));

    console.log(result[0])
    return result[0]

  })
  

