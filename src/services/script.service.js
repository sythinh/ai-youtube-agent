import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateScript(topic) {
  const res = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "user",
        content: `Write a 45-second viral YouTube Shorts script about: ${topic}`,
      },
    ],
  });

  return res.choices[0].message.content;
}
