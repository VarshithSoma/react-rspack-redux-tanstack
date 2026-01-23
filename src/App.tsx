import Footer from "./commons/components/footer";
import Header from "./commons/components/header";
import PopularItems from "./commons/components/popular-items";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
function App() {

  return (
    <div className="App">
      <Header></Header>
      <QueryClientProvider client={queryClient}>
        <PopularItems></PopularItems>
      </QueryClientProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
