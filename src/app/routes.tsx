import { createBrowserRouter } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage";
import { HomePage } from "./pages/HomePage";
import { Cart } from "./pages/Cart";
import { PrivateRoute } from "./context/PrivateRoute";
import { LoginPage } from "./pages/LoginPages";


export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: (
            <PrivateRoute>
                <HomePage />
            </PrivateRoute>),
    },
    {
        path: "/product/category/:category",
        element: (
            <PrivateRoute>
                <HomePage />
            </PrivateRoute>),
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
