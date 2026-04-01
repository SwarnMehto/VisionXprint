import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <section className="page-content">
        <div className="container">
          <div className="card">
            <h1 style={{ marginBottom: "12px" }}>Privacy Policy</h1>
            <p style={{ color: "#475569", lineHeight: 1.9 }}>
              This is a starter privacy policy page. Later yaha full legal policy add
              karni hai regarding customer data, files, orders and payments.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}