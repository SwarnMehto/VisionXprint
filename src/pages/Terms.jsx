import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <Navbar />
      <section className="page-content">
        <div className="container">
          <div className="card">
            <h1 style={{ marginBottom: "12px" }}>Terms & Conditions</h1>
            <p style={{ color: "#475569", lineHeight: 1.9 }}>
              This is a starter terms page. Later yaha order, proof, artwork approval,
              print variation and cancellation rules add karne honge.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}