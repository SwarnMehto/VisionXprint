export default function QuantitySelector({ options = [], value, onChange }) {
  return (
    <div className="form-group">
      <label>Quantity</label>
      <select value={value} onChange={onChange}>
        {options.map((qty) => (
          <option key={qty} value={qty}>
            {qty}
          </option>
        ))}
      </select>
    </div>
  );
}