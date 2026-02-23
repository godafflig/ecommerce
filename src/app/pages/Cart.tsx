import { useContext } from "react";
import { CartContext } from "../cart/CartContext";
import { Link } from "react-router-dom";
import { Navbar } from "../components/organisms/Navbar";

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
            <h2>Shopping Cart</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>${item.product.price.toFixed(2)}</td>
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        updateQuantity(
                                            item.product.id,
                                            parseInt(e.target.value) || 1
                                        )
                                    }
                                />
                            </td>
                            <td>${(item.product.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <button onClick={() => removeFromCart(item.product.id)}>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="cart-summary">
                <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
                <Link to="/">Continue Shopping</Link>
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
    );
}
