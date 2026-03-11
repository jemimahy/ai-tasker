import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function decomposeTask(goal: string) {
  const { text } = await generateText({
    model: google('gemini-1.5-flash'),
    prompt: `You are a productivity agent. Break down the goal: "${goal}" into 5 actionable sub-tasks. Output only a bulleted list.`,
  });
  return text;
}