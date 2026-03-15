import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { GlobalProvider, setGlobalErrorHandler, useGlobalContext } from '@/store';
import { ComponentWithChildren } from './common/types';
import { ErrorModal } from './components';
import Router from './router';

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

function AppState({ children }: ComponentWithChildren) {
  return <GlobalProvider>{children}</GlobalProvider>;
}

function AppContent() {
  const { setErrorModal } = useGlobalContext();

  useEffect(() => {
    setGlobalErrorHandler((errorContent) => setErrorModal(errorContent));
  }, [setErrorModal]);

  return (
    <>
      <ErrorModal />
      <Router />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppState>
        <AppContent />
      </AppState>
    </QueryClientProvider>
  );
}

export default App;
