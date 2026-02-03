import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Footer from '@commons/components/footer';
import Header from '@commons/components/header';
import ScrollToTop from '@commons/helpers';
import { store } from '@commons/store';

import AppRoutes from './routes/app-routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ScrollToTop />
          <Header />
          <AppRoutes />
          <Footer />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
