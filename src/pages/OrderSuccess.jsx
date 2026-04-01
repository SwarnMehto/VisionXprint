import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OrderSuccess() {
  return (
    <>
      <Navbar />

      <section className="page-content">
        <div className="container">
          <div
            className="card"
            style={{
              textAlign: "center",
              padding: "60px 20px",
            }}
          >
            <h1 style={{ marginBottom: "14px", fontSize: "40px" }}>
              Order Placed Successfully
            </h1>

            <p
              style={{
                color: "#475569",
                marginBottom: "24px",
                lineHeight: "1.8",
                maxWidth: "700px",
                marginInline: "auto",
              }}
            >
              Thank you for choosing Vision X Print. Your order request has been
              submitted successfully. Our team will review your order and contact
              you soon.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link to="/track-order" className="btn btn-primary">
                Track Order
              </Link>

              <Link to="/products" className="btn btn-outline">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}