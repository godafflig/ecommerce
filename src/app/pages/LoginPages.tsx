import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/atoms/Input";

export const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const success = auth.login(username, password);
        if (success) {
            navigate("/"); // redirige vers la HomePage
        } else {
            setError("Nom d'utilisateur ou mot de passe incorrect");
        }
    };

    return (
        <div className="login-page">
            <h1>Connexion</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e)}
                />
                <Input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e)}
                />
                <button type="submit">Se connecter</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};