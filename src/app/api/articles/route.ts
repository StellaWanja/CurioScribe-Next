import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { NextResponse } from "next/server";

dotenv.config();

const apiKey = process.env.GOOGLE_API_KEY;

if (!apiKey) {
  throw new Error("Missing Google API key");
}

const genAI = new GoogleGenerativeAI(apiKey);
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  generationConfig,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    // validate data
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const result = await model.generateContent(prompt);

    if (result.response.candidates && result.response.candidates.length > 0) {
      const response = result.response.candidates[0].content.parts[0].text;
      // save content to db
      
      return NextResponse.json({ response }, { status: 200 });
    } else {
      console.error("No candidates found in response:", result);
      return NextResponse.json(
        { error: "No response candidates found" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error generating content:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
