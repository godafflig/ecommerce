import { products } from "../data/product";
import { Navbar } from "../components/organisms/Navbar";
import { ProductCard } from "../components/organisms/ProductCard";
import { useParams } from "react-router-dom";

export function ProductCategorie() {
    useParams()
    return (
        <div className="categories">
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
