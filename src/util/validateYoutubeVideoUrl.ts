export function validateYoutubeVideoUrl(input: string) {
  const youtubePattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/v\/([a-zA-Z0-9_-]{11})/;
  return youtubePattern.test(input);
}
