import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TrackOrder() {
  return (
    <>
      <Navbar />
      <section className="page-hero">
        <div className="container">
          <h1>Track Order</h1>
          <p>Enter your order ID to check current status.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card">
            <div className="form-group">
              <label>Order ID</label>
              <input type="text" placeholder="Enter order ID" />
            </div>
            <button className="btn btn-primary">Track Now</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}