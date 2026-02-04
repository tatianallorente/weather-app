import { FormatMode } from './types';

export function formatWeatherDate(dt: number, timezone: number, mode: FormatMode = 'all') {
  const localDate = new Date((dt + timezone) * 1000);

  const formatters = {
    date: () =>
      localDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
      }),
    time: () =>
      localDate.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
  };

  if (mode === 'date') return formatters.date();
  if (mode === 'time') return formatters.time();

  return `${formatters.date()} ${formatters.time()}`;
}
