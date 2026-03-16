import { CardWrapper, ForecastFiveDays, LoadingOverlay } from '@/components';
import { useController } from './Home.controller';

export function Home() {
  const { data } = useController();
  return (
    <>
      <div className="mb-4 flex w-full max-w-full gap-4">
        <div className="flex w-3/4 flex-col gap-4">
          {/* Today */}
          <CardWrapper title="WeatherToday" className="flex-1">
            <p>TODO: WeatherToday </p>
          </CardWrapper>
          {/* Forecast */}
          <CardWrapper title="Forecast" className="flex-1">
            <p>TODO: Forecast </p>
          </CardWrapper>
        </div>
        {/* Forecast Five Days */}
        <div className="flex w-1/4">
          <CardWrapper title="Forecast 5 days" className="flex-1">
            {data.isLoading ? (
              <div className="flex items-center justify-center">
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
