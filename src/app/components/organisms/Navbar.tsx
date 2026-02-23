import { Button } from "../atoms/Button";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";


export function Navbar() {
    const navigate = useNavigate();

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
                    <li><a href="#Clothing">Clothing </a></li>
                    <li><a href="#Electronics">Electronics</a></li>
                    <li><a href="#Books">Books</a></li>
                    <li><a href="#Kitchen">Home & Kitchen</a></li>
                </ul>
            </div>
            <div className="navbar__panier">
                <Button onClick={() => navigate("/cart")} variant="primary">Panier
                </Button>
            </div>

        </nav>
    );
}