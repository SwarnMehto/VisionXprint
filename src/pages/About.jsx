import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="page-hero">
        <div className="container">
          <h1>About Vision X Print</h1>
          <p>
            Vision X Print custom branding aur personalized printing products provide
            karta hai businesses, schools aur individuals ke liye.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card">
            <p style={{ color: "#475569", lineHeight: 1.9 }}>
              Hum ID cards, lanyards, acrylic keychains, mugs, visiting cards aur
              custom print items design aur print karte hain. Hamara focus quality,
              branding aur smooth order experience par hai.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}