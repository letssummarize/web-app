export function getFullAudioFilePath(audioFilePath: string) {
  if (!audioFilePath) {
    return '';
  }

  if (audioFilePath.startsWith('/')) {
    const baseUrl =
      process.env.NEXT_PUBLIC_AUDIO_URL || 'http://localhost:3000';
    return baseUrl + audioFilePath;
  }
  return audioFilePath;
}
