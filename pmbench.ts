// pmbench.ts
// Simple script to send a user query using the Vercel AI SDK
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { generateText } from 'ai';

async function main() {
  // Replace with your actual OpenRouter API key
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error('Please set the OPENROUTER_API_KEY environment variable.');
    process.exit(1);
  }

  const openrouter = createOpenRouter({
    apiKey,
  });

  // Example user query
  const userQuery = process.argv.slice(2).join(' ');
  if (!userQuery) {
    console.error('Error: Please provide a query as a command-line argument.');
    process.exit(1);
  }

  try {
    const { text } = await generateText({
      model: openrouter.chat('deepseek/deepseek-chat-v3-0324:free'),
      prompt: userQuery,
    });
    console.log(text);
  } catch (error) {
    console.error('Error communicating with OpenRouter AI:', error);
  }
}

main(); 