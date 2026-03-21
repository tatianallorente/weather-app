import { Alert, Typography } from '@mui/material';
import { CloudFog, Droplets, LucideIcon, Wind, WindArrowDown } from 'lucide-react';
import { UNITS, iconBaseUrl } from '@/common/constants';
import { LoadingOverlay } from '../LoadingOverlay';
import { useController } from './WeatherToday.controller';

interface WeatherStatCardProps {
  Icon: LucideIcon;
  label: string;
  value: string | number | undefined;
  unit: string;
}

function WeatherStatCard({ Icon, label, value, unit }: WeatherStatCardProps) {
  return (
    <div className="bg-secondary-dark flex min-w-26 flex-1 flex-col items-center justify-center rounded-lg px-6 py-4">
      <div className="flex items-center gap-1">
        <Icon className="size-4 shrink-0" />
        <Typography variant="body2">{label}</Typography>
      </div>
      <Typography variant="body1">
        {value ?? '--'}
        {unit}
      </Typography>
    </div>
  );
}

export function WeatherToday() {
  const { data } = useController();
  const { main, visibility, wind, weather, name, sys } = data.dataToday ?? {};

  if (data.isLoadingToday) {
    return <LoadingOverlay />;
  }

  if (!data.isSuccessToday) {
    return <Alert severity="warning">An error occurred while loading the data. Please try again later.</Alert>;
  }

  return (
    <div className="flex flex-wrap items-stretch justify-between gap-6">
      <div className="grid min-w-26 flex-1 grid-cols-[repeat(1,minmax(104px,1fr))] gap-2 sm:grid-cols-[repeat(2,minmax(104px,1fr))]">
        <WeatherStatCard Icon={Droplets} label="Humidity" value={main?.humidity} unit={UNITS.humidity} />
        <WeatherStatCard Icon={WindArrowDown} label="Pressure" value={main?.pressure} unit={UNITS.pressure} />
        <WeatherStatCard
          Icon={CloudFog}
          label="Visibility"
          value={visibility != null ? visibility / 1000 : undefined}
          unit={UNITS.visibility}
        />
        <WeatherStatCard
          Icon={Wind}
          label="Wind"
          value={wind?.speed != null ? Math.round(wind.speed) : undefined}
          unit={UNITS.wind}
        />
      </div>

      {weather?.map(({ id, description, icon }) => (
        <div className="flex flex-1 flex-wrap items-center justify-center gap-8" key={id}>
          <div className="text-center">
            <Typography variant="h4">
              {name ?? '--'},&nbsp;{sys?.country ?? '--'}&nbsp;{data.dateTime}
            </Typography>
            <Typography variant="body1">
              Feels like {main?.feels_like != null ? Math.ceil(main.feels_like) : '--'}
              {data.tempUnit}
            </Typography>
            <Typography variant="body1" className="capitalize">
              {description}
            </Typography>
            <Typography variant="h3">
              {main?.temp != null ? Math.ceil(main.temp) : '--'}
              {data.tempUnit}
            </Typography>
          </div>

          <div className="overflow-hidden">
            <img
              src={`${iconBaseUrl}${icon}@4x.png`}
              alt={description}
              className="h-full w-full scale-[1.2] object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
