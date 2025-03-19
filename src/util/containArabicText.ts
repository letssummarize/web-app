export function containArabicText(text: string) {
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(text);
}
