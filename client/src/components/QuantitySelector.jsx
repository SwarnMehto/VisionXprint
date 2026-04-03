export default function SearchBar({ value, onChange, placeholder = "Search products..." }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: "100%",
        padding: "14px 16px",
        borderRadius: "12px",
        border: "1px solid #d1d5db",
        marginBottom: "20px",
      }}
    />
  );
}