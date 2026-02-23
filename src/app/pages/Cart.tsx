import { useContext, useState } from "react";
import { CartContext } from "../cart/CartContext";
import { Form, Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/organisms/Navbar";
import { CartItems } from "../components/organisms/CartItems";
import { Button } from "../components/atoms/Button";
import { Input } from "../components/atoms/Input";


export function Cart() {
    const navigate = useNavigate();
    const context = useContext(CartContext);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    if (!context) {
        return <div>Cart not available</div>;
    }

    const { items, removeFromCart, updateQuantity, getTotalPrice } = context;

    if (items.length === 0) {
        return (
            <div className="cart-empty">
                <Navbar />
                <h2>Your Cart is Empty</h2>
                <Button onClick={() => navigate("/")}>Continue Shopping</Button>
            </div>
        );
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitted(true);
        setName(name);
        setEmail(email);
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
                <Button onClick={() => navigate("/")}>Continue Shopping</Button>
                <Button className="checkout-btn">Checkout</Button>
            </div>

            <form method="POST" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="nom"
                    placeholder="Nom"
                    value={name}
                    onChange={(e) => setName(e)}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e)}
                />
                <button type="submit">Envoyer</button>
            </form>

            {isSubmitted && (
                <div id="Message" className="form-result">
                    <p>Merci pour votre commande {name}</p>
                    <p>Nous vous contacterons à {email}</p>
                    ✅ Votre formulaire a bien été envoyé !
                </div>
            )}
        </div>
    );
}