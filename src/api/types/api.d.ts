import {
  SummaryFormat,
  SummaryLength,
  SummaryModel,
  SummarySpeed,
} from '../enums/api.enums';

export type SummaryType = 'youtube' | 'text' | 'document';
export type documentTypes = 'pdf' | 'docx' | 'txt';

export interface SummaryOptions {
  length?: SummaryLength;
  format?: SummaryFormat;
  model?: SummaryModel;
  speed?: SummarySpeed;
  listen?: boolean;
}

export interface SummaryResponse {
  transcript?: string;
  text?: string;
  summary: string;
  videoMetadata?: YoutubeVideoMetadata;
  audioFilePath?: string;
}

export interface YoutubeVideoMetadata {
  thumbnail: string | null;
  title: string | null;
  channelName: string | null;
}
