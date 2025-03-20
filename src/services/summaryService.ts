import { SummaryOptions, SummaryResponse } from '@/api/types/api';
import { axiosPrivate, axiosMultipart } from '../api/axios';
import { Logger } from '@/util/logger';
import { AxiosError } from 'axios';

const log = Logger();

/**
 * Summarizes a YouTube video from the provided URL
 * @param videoUrl - The URL of the YouTube video to summarize
 * @param options - Optional configuration for summary length and format
 * @returns A promise resolving to the summary response
 */
export const proceedSummarizeVideo = async (videoUrl: string, options?: SummaryOptions): Promise<SummaryResponse> => {
  log.info('📹 Summarizing video:', videoUrl, options);
  try {
    const response = await axiosPrivate.post('/summarize/video', {
      content: {
        videoUrl
      },
      options
    });
    log.info('📹 Video summary success:', response.data);
    return response.data;
  } catch (error) {
    log.error('📹 Video summary error:', error);
    const axiosError = error as AxiosError<{ message: string }>;
    throw axiosError.response?.data?.message || axiosError.message || 'An unexpected error occurred';
  }
};

/**
 * Summarizes text content
 * @param text - The text content to summarize
 * @param options - Optional configuration for summary length and format
 * @returns A promise resolving to the summary response
 */
export const proceedSummarizeText = async (text: string, options?: SummaryOptions): Promise<SummaryResponse> => {
  log.info('📝 Summarizing text:', text.substring(0, 100) + '...', options);
  try {
    const response = await axiosPrivate.post('/summarize/text', {
      content: {
        text
      },
      options
    });
    log.info('📝 Text summary success:', response.data);
    return response.data;
  } catch (error) {
    log.error('📝 Text summary error:', error);
    const axiosError = error as AxiosError<{ message: string }>;
    throw axiosError.response?.data?.message || axiosError.message || 'An unexpected error occurred';
  }
};

/**
 * Summarizes the content of a file (PDF, document, etc.)
 * @param file - The file to be summarized
 * @param options - Optional configuration for summary length and format
 * @returns A promise resolving to the summary response
 */
export const proceedSummarizeDoc = async (file: File, options?: SummaryOptions): Promise<SummaryResponse> => {
  log.info('📄 Summarizing file:', file.name, file.type, file.size, options);
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    if (options?.length) {
      formData.append('length', options.length);
    }
    
    if (options?.format) {
      formData.append('format', options.format);
    }
    
    const response = await axiosMultipart.post('/summarize/file', formData);
    log.info('📄 File summary success:', response.data);
    return response.data;
  } catch (error) {
    log.error('📄 Document summary error:', error);
    const axiosError = error as AxiosError<{ message: string }>;
    throw axiosError.response?.data?.message || axiosError.message || 'An unexpected error occurred';
  }
};
