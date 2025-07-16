// pmbench.ts
// Simple script to send a user query using the Vercel AI SDK
import { createClient } from 'vercel-ai';

async function main() {
  // Replace with your actual Vercel AI API key
  const apiKey = process.env.VERCEL_AI_API_KEY;
  if (!apiKey) {
    console.error('Please set the VERCEL_AI_API_KEY environment variable.');
    process.exit(1);
  }

  const client = createClient({ apiKey });

  // Example user query
  const userQuery = process.argv.slice(2).join(' ') || 'Hello, AI!';

  try {
    const response = await client.chat.completions.create({
      messages: [
        { role: 'user', content: userQuery },
      ],
      model: 'gpt-3.5-turbo', // or another available model
    });
    console.log('AI Response:', response.choices[0].message.content);
  } catch (error) {
    console.error('Error communicating with Vercel AI:', error);
  }
}

main(); 