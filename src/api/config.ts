import axios, { isAxiosError } from 'axios';
import type { AxiosError } from 'axios';

const authClient = axios.create({
  baseURL: import.meta.env.VITE_AUTH_URL,
  withCredentials: true,
});

const apiClient = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: '/weather-api/data/2.5', // with proxy
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
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.error('Error message: ', axiosError.response.data);
      }

      throw axiosError;
    } else {
      throw new Error(error.message);
    }
  }
);

export { authClient, apiClient };
