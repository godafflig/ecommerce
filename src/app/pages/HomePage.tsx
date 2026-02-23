import { Link } from "react-router-dom";
import { products } from "../data/product";

export function HomePage() {
    return (
        <div className="home-page">
            <h1>Welcome to Our E-Commerce Store</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h2>{product.name}</h2>
                        <p className="description">{product.description}</p>
                        <p className="price">${product.price.toFixed(2)}</p>
                        <p className="category">Category: {product.category}</p>
                        <Link to={`/product/${product.id}`} className="view-btn">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
