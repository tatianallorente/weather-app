import axios, { isAxiosError } from 'axios';
import type { AxiosError } from 'axios';
import { triggerGlobalError } from '@/store';
import { CommonResponse } from './types';

const authClient = axios.create({
  baseURL: import.meta.env.VITE_AUTH_URL,
  withCredentials: true,
});

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 300000, // 5 minutes
  params: {
    appid: import.meta.env.VITE_OPENWEATHER_KEY,
    units: 'metric',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: Error | AxiosError) => {
    const axiosError = error as AxiosError;
    if (isAxiosError(error) && axiosError.response) {
      triggerGlobalError({
        title: `Error ${axiosError.response.status}`,
        message: (axiosError.response?.data as CommonResponse)?.message ?? axiosError.message,
      });

      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.error('Error message: ', axiosError.response.data);
      }

      throw axiosError;
    } else {
      triggerGlobalError({
        title: error.name,
        message: error.message,
      });
      throw new Error(error.message);
    }
  }
);

export { authClient, apiClient };
