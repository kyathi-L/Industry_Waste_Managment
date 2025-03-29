export function Textarea({ placeholder, value, onChange }) {
    return (
    <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded-md px-3 py-2 w-full"
    />
    );
}