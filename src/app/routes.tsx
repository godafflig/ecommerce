import { createBrowserRouter } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import { HomePage } from "./pages/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/product/:productId",
        element: <ProductPage />,
    },
]);
