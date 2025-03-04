import OpenAI from "openai"
import { zodResponseFormat } from "openai/helpers/zod"
import { z } from "zod"
import 'dotenv/config'


const analysisSchema = z.object({
  mood: z.string().describe("the mood of the person who wrote the journal entry."),
  color: z.string().describe("a hexidecimal color code that represents the mood of the entry."),
  score: z.number().describe("sentiment of the text and rated on a scale from -5 to 5, where 5 is extremely negative, 0 is neutral, and 5 is extremely positive."),
  summary: z.string().describe("one sentence summary of the entire entry."),
  suggestion: z.string().describe("suggest an action or activity to do to counter negative feelings or support positive mood")
});


export const analyzeEntry = async (entry) => {
    const openai = new OpenAI()
    const completion = await openai.beta.chat.completions.parse({
        model: "gpt-4o-mini",
        temperature: 0,
        messages: [
          { role: "system", content: "Analyze the journal entry as described." },
          { role: "user", content: entry },
        ],
        response_format: zodResponseFormat(analysisSchema, "mood_analysis"),
      });
      
      const analysis = completion.choices[0].message.parsed
      return analysis


}
