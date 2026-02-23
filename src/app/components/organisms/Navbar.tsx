import { Button } from "../atoms/Button";
import "./Navbar.css";

export function Navbar() {
    
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <h1 className="navbar__title">E-Commerce Store</h1>
                <ul className="navbar__links">
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
            <div className="navbar__panier">
                <Button variant="primary">Panier</Button>
            </div>
            
        </nav>
    );
}