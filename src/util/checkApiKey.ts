export function checkApiKey(): boolean {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  return !!apiKey;
}
