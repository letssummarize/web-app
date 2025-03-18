export type SummaryType = 'video' | 'text' | 'file';
export type documentTypes = 'pdf' | 'docx' | 'txt';

export interface SummaryOptions {
  length?: SummaryLength;
  format?: SummaryFormat;
}

export interface SummaryResponse {
  summary: {
    transcript?: string;
    summary: string;
  };
}
