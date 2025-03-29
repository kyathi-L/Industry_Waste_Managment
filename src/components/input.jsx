export function Input({ placeholder, value, onChange }) {
    return (
    <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded-md px-3 py-2 w-full"
    />
    );
}
