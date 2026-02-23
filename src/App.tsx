import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import { CartProvider } from "./app/cart/CartContext";
import { ThemeProvider } from "./app/theme/ThemeContext";
import "./App.css"

export function App() {
    return (
        <ThemeProvider>
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </ThemeProvider>
    );
}