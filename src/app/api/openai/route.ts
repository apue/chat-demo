import {OpenAIStream, StreamingTextResponse} from 'ai';
import OpenAI from 'openai';

export async function POST(request: Request) {
  const {messages = []}: Partial<{ messages: Array<any> }> = await request.json();
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // your openai key
    baseURL: process.env.OPENAI_BASE_UR, // if u dont need change baseUrl，you can delete this line
  });

  const PickMessages = messages.map((message) => {
    return {
      role: message.role,
      content: message.content,
    };
  });

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [...PickMessages],
    stream: true,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}