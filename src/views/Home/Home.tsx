import classnames from 'classnames';
import { CardWrapper, Forecast, ForecastFiveDays, LoadingOverlay, WeatherToday } from '@/components';
import { useController } from './Home.controller';

export function Home() {
  const { data } = useController();

  return (
    <>
      <div className="mb-6 flex w-full max-w-full gap-6">
        <div className="flex w-3/4 flex-col gap-6">
          {/* Today */}
          <CardWrapper title="Weather today" className="flex-1">
            <WeatherToday />
          </CardWrapper>
          {/* Forecast */}
          <CardWrapper title="Forecast" className="flex-1">
            {data.isLoading ? <LoadingOverlay /> : <Forecast forecastData={data.forecastData} />}
          </CardWrapper>
        </div>
        {/* Forecast Five Days */}
        <div className="flex w-1/4">
          <CardWrapper
            title="Forecast 5 days"
            className={classnames('flex-1', {
              'flex flex-col': data.isLoading,
            })}
          >
            {data.isLoading ? (
              <div className="flex flex-1 items-center justify-center">
                <LoadingOverlay />
              </div>
            ) : (
              <ForecastFiveDays forecastData={data.forecastData} />
            )}
          </CardWrapper>
        </div>
      </div>
    </>
  );
}
