import { SummaryModel } from "@/api/enums/api.enums";

export function checkApiKey(model?: SummaryModel): boolean {
  if (!model) {
    return false;
  }

  const apiKey = model === SummaryModel.OPENAI ? process.env.NEXT_PUBLIC_OPENAI_API_KEY : process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY;

  return !!apiKey;
}
