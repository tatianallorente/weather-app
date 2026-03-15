import { Navigate, Route, Routes } from 'react-router';
import { ApplicationLayout } from './components';
import { Home, Settings, WeatherChart, WeatherMap } from './views';

export default function Router() {
  return (
    <Routes>
      <Route element={<ApplicationLayout />}>
        {/* Redirections */}
        <Route path="*" element={<Navigate to="/" />} />
        {/* Application routes */}
        <Route path={'/'} element={<Home />} />
        <Route path={'/map'} element={<WeatherMap />} />
        <Route path={'/chart'} element={<WeatherChart />} />
        <Route path={'/settings'} element={<Settings />} />
      </Route>
    </Routes>
  );
}
