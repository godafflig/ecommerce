import { products } from "../data/product";
import { Navbar } from "../components/organisms/Navbar";
import { ProductCard } from "../components/organisms/ProductCard";

export function HomePage() {
    return (
        <div className="home-page">
            <Navbar />
            <h1>Welcome to Our E-Commerce Store</h1>
            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
