import { Link } from "react-router-dom";
import "./ProductCard.css";
import type { Product } from "../../data/product";

type ProductCardProps = {
    product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p className="description">{product.description}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="category">Category: {product.category}</p>
            <Link to={`/product/${product.id}`} className="view-btn">
                View Details
            </Link>
        </div>
    );
}
