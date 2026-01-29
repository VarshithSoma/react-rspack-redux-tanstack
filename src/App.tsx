import Footer from "./commons/components/footer";
import Header from "./commons/components/header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./commons/store";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import AppRoutes from "./routes/app-routes";
import ScrollToTop from "./commons/helpers";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  console.log("app mounted");
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