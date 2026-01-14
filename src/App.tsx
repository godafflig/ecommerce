import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import { CartProvider } from "./app/cart/CartContext";

export function App() {
    return (
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    );
}