import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
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
  maxOutputTokens: 4096,
  responseModalities: ["Text", "Image"],
};
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp-image-generation",
  generationConfig,
  safetySettings,
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
      let textResponse = "";
      let imageData = null;

      for (const part of result.response.candidates[0].content.parts) {
        if (part.text) {
          textResponse += part.text;
        } else if (part.inlineData) {
          imageData = part.inlineData.data;
        }
      }

      if (imageData) {
        // Handle Image Data
        const imageBuffer = Buffer.from(imageData, "base64");

        // Return Image data as part of the JSON response.
        return NextResponse.json(
          {
            response: textResponse,
            image: {
              data: imageBuffer.toString("base64"),
            },
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json({ response: textResponse }, { status: 200 });
      }
    } else {
      console.error("No candidates found in response:", result);
      return NextResponse.json({ error: "No response found" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error generating content:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
