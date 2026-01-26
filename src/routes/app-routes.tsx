import { Routes, Route } from "react-router-dom";

import HomePage from "../features/home/pages";
import ProductDetailsPage from "../features/product-detailed/pages";
// import CheckoutPage from "../features/checkout/pages";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
        </Routes>
    );
}
