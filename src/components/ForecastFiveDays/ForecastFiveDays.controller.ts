import type { ForecastListItem, ForecastResponse } from '@/api/types';

function groupForecastByDay(list: ForecastListItem[] | undefined, timezone?: number): ForecastListItem[][] {
  const days: Record<string, ForecastListItem[]> = {};
  const timezoneOffset = timezone ?? 0;

  list?.forEach((item) => {
    const localDate = new Date((item.dt + timezoneOffset) * 1000);
    const dayKey = localDate.toISOString().split('T')[0];

    if (!days[dayKey]) days[dayKey] = [];
    days[dayKey].push(item);
  });

  return Object.values(days);
}

function summarizeDay(dayItems: ForecastListItem[]): ForecastItem {
  if (!dayItems.length) {
    return { dt: 0, tempMin: 0, tempMax: 0, icon: '01d' };
  }

  const temps = dayItems.map((i) => i.main.temp);
  const tempMin = Math.round(Math.min(...temps));
  const tempMax = Math.round(Math.max(...temps));

  const midIndex = Math.floor(dayItems.length / 2);
  const icon = dayItems[midIndex].weather[0].icon;
  const dt = dayItems[midIndex].dt;

  return { dt, tempMin, tempMax, icon };
}

interface ForecastItem {
  dt: number;
  tempMin: number;
  tempMax: number;
  icon: string;
}

interface UseControllerParams {
  forecastData?: ForecastResponse;
}

export function useController({ forecastData }: UseControllerParams) {
  const getDayLabel = (dt: number) => {
    const timezoneOffset = forecastData?.city?.timezone ?? 0;
    const date = new Date((dt + timezoneOffset) * 1000);

    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
    });
  };

  const grouped = groupForecastByDay(forecastData?.list, forecastData?.city?.timezone);
  const summarized: ForecastItem[] = grouped.map(summarizeDay).slice(0, 5);

  return {
    data: {
      summarized,
    },
    actions: {
      getDayLabel,
    },
  };
}
