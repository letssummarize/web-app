import getApiBaseUrl from '@/util/getApiBaseUrl';
import { Logger } from '@/util/logger';
import { SummaryModel } from '@/api/enums/api.enums';
import { summaryRequest } from './types/api';
import axios from 'axios';
import { isFreeUser } from '@/util/isFreeUser';
const log = Logger();

const createAxiosInstance = (contentType = 'application/json') => {
  const instance = axios.create({
    baseURL: getApiBaseUrl(),
    headers: { 'Content-Type': contentType },
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config) => {
      const data = config.data as summaryRequest;
      let model = data.options?.model || SummaryModel.DEFAULT;

      // Force Gemini model for free users
      if (isFreeUser()) {
        if (model === SummaryModel.OPENAI || model === SummaryModel.DEEPSEEK) {
          throw new Error('Free users can only use the Gemini model.');
        }
        model = SummaryModel.GEMINI;
        if (data.options) {
          data.options.model = model;
        }
      }

      const apiKey =
        model === SummaryModel.OPENAI
          ? process.env.NEXT_PUBLIC_OPENAI_API_KEY
          : model === SummaryModel.DEEPSEEK
          ? process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY
          : model === SummaryModel.GEMINI
          ? process.env.NEXT_PUBLIC_GEMINI_API_KEY
          : null;

      log.info('model', model);

      if (apiKey) {
        config.headers.Authorization = `Bearer ${apiKey}`;
      } else {
        log.warn('No API key found in environment variables');
      }

      return config;
    },
    (error) => {
      log.error('Request Error:', error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      log.info(`✅ API Response: ${response.status}`, {
        data: response.data,
        headers: response.headers,
      });
      return response;
    },
    (error) => {
      log.error(
        'Response Error:',
        error.response
          ? {
              status: error.response.status,
              statusText: error.response.statusText,
              data: error.response.data,
              headers: error.response.headers,
            }
          : error.message
      );
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosPrivate = createAxiosInstance();
export const axiosMultipart = createAxiosInstance('multipart/form-data');
export default createAxiosInstance();
