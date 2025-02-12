import { db } from "../db/client"
import { journalEntries } from "../db/schema"

const mockdata = [
    {
        id: 1,
        createdAt: "01.01.2025",
        text: "Hello world",
        mood: "happy",

    },
    {

        id: 2,
        createdAt: "02.01.2025",
        text: "Hello world",
        mood: "happy"
    },
    {
        id: 3,
        createdAt: "03.01.2025",
        text: "Hello world",
        mood: "happy"
    },
    {
        id: 4,
        createdAt: "04.01.2025",
        text: "Hello world",
        mood: "happy"
    },
    {
        id: 5,
        createdAt: "05.01.2025",
        text: "Hello world",
        mood: "happy"
    },
    {
        id: 6,
        createdAt: "06.01.2025",
        text: "Hello world",
        mood: "happy"
    }
]

export default defineEventHandler(async (event) => {
    const result = await db.select().from(journalEntries)
    console.log(result[0])
    return result




    // return mockdata
  })