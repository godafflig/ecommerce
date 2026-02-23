import { Button } from "../atoms/Button";
import { useTheme } from "../../theme/ThemeContext";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";


export function Navbar() {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <h1 className="navbar__title">E-Commerce Store</h1>
                <ul className="navbar__links">
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
            <div className="navbar__container">
                <h1 className="navbar__title">Catégorie</h1>
                <ul className="navbar__links">
                    <Link to="/product/category/Electronics">Electronics</Link>
                    <Link to="/product/category/Clothing">Clothing</Link>
                    <Link to="/product/category/Books">Books</Link>
                    <Link to="/product/category/Kitchen">Home & Kitchen</Link>
                </ul>
            </div>
            <div className="navbar__panier">
                <button 
                    className="theme-toggle" 
                    onClick={toggleTheme}
                    title={`Passer au thème ${theme === 'light' ? 'sombre' : 'clair'}`}
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
                <Button onClick={() => navigate("/cart")} variant="primary" ><a href="/cart">Panier
                </a></Button>
            </div>

        </nav>
    );
}