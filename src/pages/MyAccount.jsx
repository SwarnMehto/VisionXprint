import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyAccount() {
  return (
    <>
      <Navbar />
      <section className="page-content">
        <div className="container">
          <div className="card">
            <h1 style={{ marginBottom: "12px" }}>My Account</h1>
            <p style={{ color: "#475569" }}>
              User profile, order history, saved addresses aur saved designs yaha aayenge.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}