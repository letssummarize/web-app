'use client';

import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { SummaryOptions, SummaryResponse, SummaryType } from '@/api/types/api';
import { useRouter } from 'next/navigation';
import { SummaryFormat, SummaryLength } from '@/api/enums/api.enums';
import {
  proceedSummarizeDoc,
  proceedSummarizeText,
  proceedSummarizeVideo,
} from '@/services/summaryService';
import { isSummaryResponseValid } from '@/util/isSummaryResponseValid';
import { isDocumentSupported } from '@/util/isDocumentSupported';
import { checkApiKey } from '@/util/checkApiKey';
import { Logger } from '@/util/logger';
import { getLocalStorageKeys } from '@/util/getLocalStorageKeys';
import { saveOptions } from '@/util/saveOptions';
import { saveSummary } from '@/util/saveSummary';
import { saveSourceContent, SourceContent } from '@/util/saveSourceContent';
import { clearLocalStorage } from '@/util/clearLocalStorage';
import { resetOptions } from '@/util/resetOptions';

const log = Logger();

interface SummaryContextType {
  isLoading: boolean;
  error: string | null;
  summary: SummaryResponse | null;
  options: SummaryOptions;
  setOptions: (options: SummaryOptions) => void;
  summarizeVideo: (url: string) => Promise<void>;
  summarizeText: (text: string) => Promise<void>;
  summarizeDoc: (file: File) => Promise<void>;
  clearSummary: () => void;
  sourceContent: SourceContent | null;
  hasLoadedFromStorage: boolean;
}

export const SummaryContext = createContext<SummaryContextType | undefined>(
  undefined
);

export const LOCAL_STORAGE_KEYS = getLocalStorageKeys();
export const SummaryProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<SummaryResponse | null>(null);
  const [sourceContent, setSourceContent] = useState<SourceContent | null>(
    null
  );
  const [options, setOptions] = useState<SummaryOptions>({
    length: SummaryLength.STANDARD,
    format: SummaryFormat.NARRATIVE,
  });
  const [hasLoadedFromStorage, setHasLoadedFromStorage] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (hasLoadedFromStorage) return;

    try {
      let hasLoadedAny = false;

      const savedSummary = localStorage.getItem(LOCAL_STORAGE_KEYS.SUMMARY);
      if (savedSummary) {
        try {
          const parsedSummary = JSON.parse(savedSummary);
          setSummary(parsedSummary);
          hasLoadedAny = true;
        } catch (parseErr) {
          log.error('Failed to parse summary from localStorage:', parseErr);
          localStorage.removeItem(LOCAL_STORAGE_KEYS.SUMMARY);
        }
      }

      const savedOptions = localStorage.getItem(LOCAL_STORAGE_KEYS.OPTIONS);
      if (savedOptions) {
        try {
          const parsedOptions = JSON.parse(savedOptions);
          setOptions(parsedOptions);
          hasLoadedAny = true;
        } catch (parseErr) {
          log.error('Failed to parse options from localStorage:', parseErr);
          localStorage.removeItem(LOCAL_STORAGE_KEYS.OPTIONS);
        }
      }

      const savedSourceContent = localStorage.getItem(
        LOCAL_STORAGE_KEYS.SOURCE_CONTENT
      );
      if (savedSourceContent) {
        try {
          const parsedSourceContent = JSON.parse(savedSourceContent);
          setSourceContent(parsedSourceContent);
          hasLoadedAny = true;
        } catch (parseErr) {
          log.error(
            'Failed to parse source content from localStorage:',
            parseErr
          );
          localStorage.removeItem(LOCAL_STORAGE_KEYS.SOURCE_CONTENT);
        }
      }

      setHasLoadedFromStorage(true);
    } catch (err) {
      log.error('Error loading data from localStorage:', err);
      setHasLoadedFromStorage(true);
    }
  }, [hasLoadedFromStorage]);

  useEffect(() => {
    if (hasLoadedFromStorage) {
      saveOptions(options);
    }
  }, [options, hasLoadedFromStorage]);

  useEffect(() => {
    if (hasLoadedFromStorage) {
      saveSummary(summary);
    }
  }, [summary, hasLoadedFromStorage]);

  useEffect(() => {
    if (hasLoadedFromStorage) {
      saveSourceContent(sourceContent);
    }
  }, [sourceContent, hasLoadedFromStorage]);

  const clearSummary = () => {
    log.info('Clearing summary state and localStorage');

    setSummary(null);
    setError(null);
    setSourceContent(null);
    resetOptions(setOptions);
    setHasLoadedFromStorage(false);
    clearLocalStorage();
  };

  async function summarizeVideo(url: string): Promise<void> {
    try {
      setIsLoading(true);
      setError(null);
      setSourceContent({ type: 'video', content: url });

      if (!checkApiKey()) {
        throw new Error(
          'API key is missing. Please check your environment configuration.'
        );
      }

      const result = await proceedSummarizeVideo(url, options);
      setSummary(isSummaryResponseValid(result));

      router.push('/prompt/result');
    } catch (err: any) {
      log.error('YouTube summarization failed', err);
      setError(
        err.response?.data?.message ||
          err.message ||
          'Failed to summarize video'
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function summarizeText(text: string): Promise<void> {
    log.info('Starting text summarization process', {
      textLength: text.length,
      options,
    });
    try {
      setIsLoading(true);
      setError(null);
      setSourceContent({ type: 'text', content: text });

      if (!checkApiKey()) {
        throw new Error(
          'API key is missing. Please check your environment configuration.'
        );
      }

      const result = await proceedSummarizeText(text, options);
      setSummary(isSummaryResponseValid(result));

      router.push('/prompt/result');
    } catch (err: any) {
      log.error('Text summarization failed', err);
      setError(
        err.response?.data?.message || err.message || 'Failed to summarize text'
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function summarizeDoc(file: File): Promise<void> {
    try {
      setIsLoading(true);
      setError(null);
      setSourceContent({
        type: 'file',
        content: file.name,
        fileName: file.name,
      });

      if (!checkApiKey()) {
        throw new Error(
          'API key is missing. Please check your environment configuration.'
        );
      }

      if (!isDocumentSupported(file)) {
        throw new Error(
          'Unsupported file type. Please upload a PDF, DOCX, or TXT file.'
        );
      }

      const result = await proceedSummarizeDoc(file, options);
      setSummary(isSummaryResponseValid(result));
      
      router.push('/prompt/result');
    } catch (err: any) {
      log.error('File summarization failed', err);
      setError(
        err.response?.data?.message || err.message || 'Failed to summarize file'
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SummaryContext.Provider
      value={{
        isLoading,
        error,
        summary,
        options,
        setOptions,
        summarizeVideo,
        summarizeText,
        summarizeDoc,
        clearSummary,
        sourceContent,
        hasLoadedFromStorage,
      }}
    >
      {children}
    </SummaryContext.Provider>
  );
};
