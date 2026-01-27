import Footer from "./commons/components/footer";
import Header from "./commons/components/header";
import { BrowserRouter } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import AppRoutes from "./routes/app-routes";

const queryClient = new QueryClient();

function App() {
  console.log("app mounted");
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
