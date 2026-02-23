type InputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
};
export function Input({ value, onChange, placeholder }: InputProps) {
    return (
        <input
            value={value}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
        />
    );
}