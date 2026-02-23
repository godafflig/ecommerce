type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
};
export function Button({
    children,
    onClick,
    variant = 'primary',
    disabled = false,
    type = 'button',
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`btn btn--${variant}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}