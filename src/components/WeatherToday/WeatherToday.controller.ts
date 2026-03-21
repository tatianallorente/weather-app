import { useQuery } from '@tanstack/react-query';
import { getTodayWeather } from '@/api';
import { city, tempUnit } from '@/common/constants';

export function useController() {
  const {
    data: dataToday,
    isSuccess: isSuccessToday,
    isLoading: isLoadingToday,
    fetchStatus: fetchStatusToday,
  } = useQuery({
    queryKey: ['todayWeather', city],
    queryFn: () => getTodayWeather({ q: city }),
  });

  const dateTime = dataToday?.dt
    ? new Date(dataToday.dt * 1000).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    : '--';

  return {
    data: {
      dataToday,
      isSuccessToday,
      isLoadingToday: isLoadingToday || fetchStatusToday === 'fetching',
      dateTime,
      tempUnit,
    },
    actions: {},
  };
}
