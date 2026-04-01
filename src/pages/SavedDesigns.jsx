import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SavedDesigns() {
  return (
    <>
      <Navbar />
      <section className="page-content">
        <div className="container">
          <div className="card">
            <h1 style={{ marginBottom: "12px" }}>Saved Designs</h1>
            <p style={{ color: "#475569" }}>
              Future me user ke saved templates aur uploaded design drafts yaha dikhenge.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}