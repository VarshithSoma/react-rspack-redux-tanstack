import Footer from "./commons/components/footer";
import Header from "./commons/components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./features/home/pages";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ProductDetails from "./features/product-detailed/pages";
const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={< Welcome />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
