import Replicate from "replicate"
import "dotenv/config"

import OpenAI from "openai"
import { zodResponseFormat } from "openai/helpers/zod"
import { z } from "zod"

// import { writeFile, writeFileSync } from "node:fs"
// import fetch from "node-fetch"


const promptSchema = z.object({
    prompt: z.string().describe("a short, descriptive prompt for image generation."),
  })

export const generateImage = async (entry) => {
    // generate prompt for image generation
    console.log("Generating Image Prompt...")
    const openai = new OpenAI()
    const completion = await openai.beta.chat.completions.parse({
        model: "gpt-4o-mini",
        temperature: 0,
        messages: [
            { role: "system", content: "Create a short prompt for image generation from a previous journal entry adapted to a female in anime or manga style." },
            { role: "user", content: entry },
        ],
        response_format: zodResponseFormat(promptSchema, "prompt_generation"),
        });
        
    const imagePrompt = completion.choices[0].message.parsed
    console.log(imagePrompt?.prompt)
       
    // generate image using image generation prompt
    console.log("Generating Image...")
    const replicate = new Replicate()
    console.log("Running the model...")
    const output = await replicate.run(
        "black-forest-labs/flux-schnell",
        {
            input: {
                prompt: imagePrompt.prompt
            },
        }
    )
    console.log("Finished! ", output[0].url().href)
    return  output[0].url().href
}
