import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'ghost';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: ButtonVariant;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
};
export function Button({
    children,
    onClick,
    variant = 'secondary',
    disabled = false,
    type = 'button',
    className = '',
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`btn btn--${variant} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}