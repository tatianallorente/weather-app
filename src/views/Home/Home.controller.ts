import { useQuery } from '@tanstack/react-query';
import { getForecast } from '@/api';
import { city, units } from '@/common/constants';

export function useController() {
  const {
    data: forecastData,
    isSuccess,
    isLoading,
    fetchStatus,
  } = useQuery({
    queryKey: ['forecast', city],
    queryFn: () => getForecast({ q: city, units }),
  });

  return {
    data: {
      forecastData,
      isSuccess,
      isLoading: isLoading || fetchStatus === 'fetching',
    },
    actions: {},
  };
}
