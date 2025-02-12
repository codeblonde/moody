import { eq } from "drizzle-orm"
import { db } from "~/server/db/client"
import { journalEntries } from "~/server/db/schema"


const data = [
    {
        id: "1",
        createdAt: "01.01.2025",
        text: "Hello world",
        mood: "happy",

    },
    {

        id: "2",
        createdAt: "02.01.2025",
        text: "Hello world",
        mood: "happy"
    },
    {
        id: "3",
        createdAt: "03.01.2025",
        text: "Hello world",
        mood: "happy"
    },
    {
        id: "4",
        createdAt: "04.01.2025",
        text: "Hello world",
        mood: "happy"
    },
    {
        id: "5",
        createdAt: "05.01.2025",
        text: "Hello world",
        mood: "happy"
    },
    {
        id: "6",
        createdAt: "06.01.2025",
        text: "Hello world",
        mood: "happy"
    }
]

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    const result = await db.select().from(journalEntries).where(eq(journalEntries.entryId, id))
    console.log(result[0])
    return result[0]


    
    
    // return mockdata
  
    //return (data.filter((ent) => ent.id === id)[0])
  })
  

