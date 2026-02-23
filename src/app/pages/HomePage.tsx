import { products } from "../data/product";
import { Navbar } from "../components/organisms/Navbar";
import { ProductCard } from "../components/organisms/ProductCard";
import { useParams } from "react-router-dom";

export function HomePage() {
    const { category } = useParams();
    console.log(category);
    const filteredProducts = category
        ? products.filter((product) => product.category === category)
        : products;
    return (
        <div className="home-page">
            <Navbar />
            <h1>Welcome to Our E-Commerce Store</h1>
            <h3>{category}</h3>
            <div className="products-grid">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
