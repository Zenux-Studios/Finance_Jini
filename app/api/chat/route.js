import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req) {
  const { messages } = await req.json();

  const result = streamText({
    model: google("gemini-1.5-pro"),
    messages,

    system:
      "You are a helpful AI assistant that provides concise and accurate information.",
  });

  return result.toDataStreamResponse();
}
