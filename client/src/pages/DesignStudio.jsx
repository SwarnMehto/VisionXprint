import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DesignStudio() {
  return (
    <>
      <Navbar />
      <section className="page-hero">
        <div className="container">
          <h1>Design Studio</h1>
          <p>
            Abhi ye starter version hai. Later yaha live editor, text, image, QR code
            aur preview features add honge.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card">
            <h2 style={{ marginBottom: "14px" }}>Design Studio Placeholder</h2>
            <p style={{ lineHeight: 1.8, color: "#475569" }}>
              Future features: upload design, add text, front/back preview, safe area,
              export proof, QR code add.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}