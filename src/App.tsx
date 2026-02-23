import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import { CartProvider } from "./app/cart/CartContext";
import { ThemeProvider } from "./app/theme/ThemeContext";
import "./App.css"
import { AuthProvider } from "./app/context/AuthContext";

export function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <CartProvider>
                    <RouterProvider router={router} />
                </CartProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}