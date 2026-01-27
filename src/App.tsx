import Footer from "./commons/components/footer";
import Header from "./commons/components/header";
import { HashRouter } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import AppRoutes from "./routes/app-routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
