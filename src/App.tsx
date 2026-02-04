import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigate, Route, Routes } from 'react-router';
import { ApplicationLayout } from './components';
import { Home, Settings, WeatherChart, WeatherMap } from './views';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      retryOnMount: false,
      refetchOnReconnect: false,
    },
    mutations: {
      retry: false,
    },
  },
});

const redirectionRoutes = <Route path="*" element={<Navigate to="/" />} />;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<ApplicationLayout />}>
          {/* Redirections */}
          {redirectionRoutes}
          {/* Application routes */}
          <Route path={'/'} element={<Home />} />
          <Route path={'/map'} element={<WeatherMap />} />
          <Route path={'/chart'} element={<WeatherChart />} />
          <Route path={'/settings'} element={<Settings />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
