import { Box, Typography } from '@mui/material';
import type { ForecastResponse } from '@/api/types';
import { iconBaseUrl, tempUnit } from '@/common/constants';
import { formatWeatherDate } from '@/common/utils';

interface ForecastProps {
  forecastData?: ForecastResponse;
}

export function Forecast({ forecastData }: ForecastProps) {
  const { list, city } = forecastData ?? {};
  const timezoneOffset = city?.timezone ?? 0;

  return (
    <Box className="[&::-webkit-scrollbar-thumb:hover]:bg-neutral-450 flex overflow-x-scroll [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-400 [&::-webkit-scrollbar-thumb:hover]:bg-neutral-500">
      {list?.map((listData) => {
        const { dt, weather, pop, main } = listData ?? {};
        const { icon = '01d', main: mainW = '', description = '' } = weather?.[0] ?? {};

        const dateFormatted = formatWeatherDate(dt, timezoneOffset, 'date');
        const timeFormatted = formatWeatherDate(dt, timezoneOffset, 'time');

        const precipitationPct = pop * 100;
        const tempRounded = Math.round(main?.temp);

        return (
          <Box className="flex" key={dt}>
            <Box className="flex w-28 min-w-28 flex-col items-center justify-center p-2">
              <Typography variant="body2" component="span">
                {dateFormatted}
              </Typography>
              <Typography variant="body2" component="span">
                {timeFormatted}
              </Typography>

              <Box className="flex flex-col items-center justify-center">
                <img src={`${iconBaseUrl}${icon}@2x.png`} alt={mainW} title={description} className="w-20" />
                <Typography variant="body2" component="span">
                  {precipitationPct}%
                </Typography>
                <Typography variant="body2" component="span">
                  {tempRounded !== null ? `${tempRounded}${tempUnit}` : '--'}
                </Typography>
              </Box>
            </Box>
            <Box className="my-[15%] w-0.5 bg-neutral-400" />
          </Box>
        );
      })}
    </Box>
  );
}
