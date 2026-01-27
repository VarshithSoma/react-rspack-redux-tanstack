import { Routes, Route } from "react-router-dom";

import HomePage from "../features/home/pages";
import ProductDetailsPage from "../features/product-details/pages";
import AllProductsPage from "../features/all-products/pages";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/all-products" element={<AllProductsPage />} />
        </Routes>
    );
}
