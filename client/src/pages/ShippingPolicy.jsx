import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ShippingPolicy() {
  return (
    <>
      <Navbar />
      <section className="page-content">
        <div className="container">
          <div className="card">
            <h1 style={{ marginBottom: "12px" }}>Shipping Policy</h1>
            <p style={{ color: "#475569", lineHeight: 1.9 }}>
              This is a starter shipping policy page. Later expected dispatch time,
              delivery timeline and courier terms yaha add honge.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}