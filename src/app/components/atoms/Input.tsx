type InputProps = {
    value: CartItem["quantity"] | string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: string;
    min?: string;
};
import type { CartItem } from "../../cart/CartContext";
import "./Input.css";
export function Input({ type, value, onChange, placeholder, min }: InputProps) {
    return (
        <input
            type={type}
            min={min}
            value={value}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            className="app-input"
        />
    );
}