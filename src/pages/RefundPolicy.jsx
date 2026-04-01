import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RefundPolicy() {
  return (
    <>
      <Navbar />
      <section className="page-content">
        <div className="container">
          <div className="card">
            <h1 style={{ marginBottom: "12px" }}>Refund Policy</h1>
            <p style={{ color: "#475569", lineHeight: 1.9 }}>
              This is a starter refund policy page. Later return, reprint, damaged
              order and custom product refund rules add karne honge.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}