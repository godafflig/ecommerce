import { Button } from "../atoms/Button";
import { useTheme } from "../../theme/ThemeContext";
import "./Navbar.css";

export function Navbar() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <h1 className="navbar__title">E-Commerce Store</h1>
                <ul className="navbar__links">
                    <li><a href="/">Home</a></li>
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
                <Button variant="primary" ><a href="/panier">Panier</a></Button>
            </div>
            
        </nav>
    );
}