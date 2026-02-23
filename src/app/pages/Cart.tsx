import { useContext } from "react";
import { CartContext } from "../cart/CartContext";
import { Link } from "react-router-dom";
import { Navbar } from "../components/organisms/Navbar";
import { CartItems } from "../components/organisms/CartItems";

export function Cart() {
    const context = useContext(CartContext);

    if (!context) {
        return <div>Cart not available</div>;
    }

    const { items, removeFromCart, updateQuantity, getTotalPrice } = context;

    if (items.length === 0) {
        return (
            <div className="cart-empty">
                <Navbar />
                <h2>Your Cart is Empty</h2>
                <Link to="/">Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <Navbar />
            <h2>Shopping Cart</h2>
            <CartItems
                items={items.map(item => ({ ...item, product: { ...item.product, id: String(item.product.id) } }))}
                onUpdateQuantity={(productId, quantity) => updateQuantity(Number(productId), quantity)}
                onRemoveFromCart={(productId) => removeFromCart(Number(productId))}
            />
            <div className="cart-summary">
                <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
                <Link to="/">Continue Shopping</Link>
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
    );
}
