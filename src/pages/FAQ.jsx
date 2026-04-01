import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";

export default function FAQ() {
  return (
    <>
      <Navbar />
      <section className="page-hero">
        <div className="container">
          <h1>FAQ</h1>
          <p>Common questions about products, orders and printing.</p>
        </div>
      </section>
      <FAQSection />
      <Footer />
    </>
  );
}