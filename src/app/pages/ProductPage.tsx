import { useParams } from "react-router-dom";
import { products } from "../data/product";
import { useContext, useState } from "react";
import { CartContext } from "../cart/CartContext";

export function ProductPage() {
    const { productId } = useParams();
    const product = products.find((p) => p.id === Number(productId));
    const context = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    if (!context) {
        return <div>Cart context not available</div>;
    }

    const { addToCart } = context;

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1);
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="category">Category: {product.category}</p>
            <div>
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                />
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}
