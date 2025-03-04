import OpenAI from "openai"
import { zodResponseFormat } from "openai/helpers/zod"
import { z } from "zod"
import 'dotenv/config'


const promptSchema = z.object({
  prompt: z.string().describe("a short, one sentence journaling prompt for self-reflection."),
})


export const generatePrompt = async(entry) => {
    const openai = new OpenAI()
    const completion = await openai.beta.chat.completions.parse({
        model: "gpt-4o-mini",
        temperature: 0,
        messages: [
          { role: "system", content: "Create a short prompt for journaling that takes into account a previous journal entry." },
          { role: "user", content: entry },
        ],
        response_format: zodResponseFormat(promptSchema, "prompt_generation"),
      });
      
      const journalPrompt = completion.choices[0].message.parsed
      return journalPrompt

}