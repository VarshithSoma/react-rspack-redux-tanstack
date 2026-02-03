import { Route, Routes } from 'react-router-dom';
import AllProductsPage from '../features/all-products/pages';
import CartPage from '../features/cart/pages';
import CheckOutPage from '../features/checkout/pages/index.tsx';
import HomePage from '../features/home/pages';
import ProductDetailsPage from '../features/product-details/pages';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/all-products" element={<AllProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/:id" element={<ProductDetailsPage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
    </Routes>
  );
}
