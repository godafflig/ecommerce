import { createBrowserRouter } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import { HomePage } from "./pages/HomePage";
import { Cart } from "./pages/Cart";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/product/:category",
        element: <HomePage />,
    },
    {
        path: "/product/:productId",
        element: <ProductPage />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
]);
