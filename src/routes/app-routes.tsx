import { Routes, Route } from "react-router-dom";
import HomePage from "../features/home/pages";
import ProductDetailsPage from "../features/product-details/pages";
import AllProductsPage from "../features/all-products/pages";
import CartPage from "../features/cart/pages";
import CheckOutPage from "../features/checkout/pages/index.tsx";

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
