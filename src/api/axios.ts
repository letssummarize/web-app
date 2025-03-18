import getApiBaseUrl from '@/util/getApiBaseUrl';
import { Logger } from '@/util/logger';
import axios from 'axios';

const log = Logger();

const createAxiosInstance = (contentType = 'application/json') => {
  const instance = axios.create({
    baseURL: getApiBaseUrl(),
    headers: { 'Content-Type': contentType },
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config) => {
      const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
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
