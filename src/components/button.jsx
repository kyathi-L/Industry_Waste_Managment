export function Button({ children, onClick, variant = "default", className }) {
    const baseStyle = "px-4 py-2 rounded-md transition";
    const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-200",
    };
    return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} onClick={onClick}>
        {children}
    </button>
    );
}
