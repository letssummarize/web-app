export function isDocumentSupported(file: File): boolean {
  const validTypes = [
    '.pdf',
    '.docx',
    '.txt',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
  ];
  const fileExtension = file.name
    .substring(file.name.lastIndexOf('.'))
    .toLowerCase();

  return validTypes.some((type) => file.type === type || fileExtension === type);
}
