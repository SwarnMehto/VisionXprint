import { formatCurrency } from "../utils/formatCurrency";

export default function PriceBox({ total }) {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "14px",
        background: "#eff6ff",
        border: "1px solid #bfdbfe",
        marginTop: "12px",
      }}
    >
      <h3 style={{ marginBottom: "8px" }}>Estimated Price</h3>
      <p style={{ fontSize: "24px", fontWeight: "800", color: "#1d4ed8" }}>
        {formatCurrency(total)}
      </p>
    </div>
  );
}