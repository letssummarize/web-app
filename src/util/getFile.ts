export async function getFileFromPath(path: string): Promise<File> {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

    const blob = await response.blob();
    const fileName = path.split('/').pop() || 'downloaded-file';
    const file = new File([blob], fileName, { type: blob.type });

    return file;
  } catch (error) {
    console.error('Error fetching file:', error);
    throw error;
  }
}
