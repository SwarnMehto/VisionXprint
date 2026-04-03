import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BulkOrder() {
  return (
    <>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <h1>Bulk Order Inquiry</h1>
          <p>For companies, schools, institutes and events.</p>
        </div>
      </section>

      <section className="page-content vx-page-top-space">
        <div className="container">
          <div className="vx-form-wrap">
            <form className="vx-form-card">
              <div className="form-group">
                <label>Company / Organization Name</label>
                <input type="text" placeholder="Enter company name" />
              </div>

              <div className="form-group">
                <label>Product Type</label>
                <select>
                  <option>ID Cards</option>
                  <option>Lanyards</option>
                  <option>Acrylic Keychains</option>
                  <option>Mugs</option>
                  <option>Visiting Cards</option>
                </select>
              </div>

              <div className="form-group">
                <label>Quantity</label>
                <input type="number" placeholder="Enter quantity" />
              </div>

              <div className="form-group">
                <label>Requirement Details</label>
                <textarea rows="5" placeholder="Tell us your requirement" />
              </div>

              <button type="button" className="btn btn-primary">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}