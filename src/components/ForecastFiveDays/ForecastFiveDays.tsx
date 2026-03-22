import { Box, Typography } from '@mui/material';
import type { ForecastResponse } from '@/api/types';
import { iconBaseUrl, tempUnit } from '@/common/constants';
import { useController } from './ForecastFiveDays.controller';

interface ForecastFiveDaysProps {
  forecastData?: ForecastResponse;
}

export function ForecastFiveDays({ forecastData }: ForecastFiveDaysProps) {
  const { data, actions } = useController({ forecastData });

  return (
    <Box className="flex flex-col gap-4">
      {data.summarized.map((day) => (
        <Box key={day.dt} className="flex items-center gap-4 rounded-lg bg-orange-200 p-4">
          <Typography variant="body1" component="p" className="w-20 font-medium capitalize">
            {actions.getDayLabel(day.dt)}
          </Typography>
          <img src={`${iconBaseUrl}${day.icon}@2x.png`} alt="icono" className="h-12 w-12" />
          <Typography variant="body1" component="p" className="ml-auto font-semibold">
            {day.tempMin}
            {tempUnit}&nbsp;/&nbsp;{day.tempMax}
            {tempUnit}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
