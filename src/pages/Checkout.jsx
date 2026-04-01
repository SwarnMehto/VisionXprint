import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("visionx_cart");
    navigate("/order-success");
  };

  return (
    <>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <h1>Secure checkout</h1>
          <p>
            Enter your contact and shipping information to complete your custom
            print order request.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "24px",
              alignItems: "start",
            }}
          >
            <form
              className="card"
              onSubmit={handleSubmit}
              style={{ borderRadius: "28px", padding: "28px" }}
            >
              <h2 style={{ marginTop: 0, marginBottom: "20px" }}>
                Shipping details
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" required />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" required />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" required />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" required />
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Address</label>
                <textarea rows="4" required />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "16px",
                }}
              >
                <div className="form-group">
                  <label>City</label>
                  <input type="text" required />
                </div>

                <div className="form-group">
                  <label>State / Region</label>
                  <input type="text" required />
                </div>

                <div className="form-group">
                  <label>Postal Code</label>
                  <input type="text" required />
                </div>
              </div>

              <div className="form-group">
                <label>Country</label>
                <select required>
                  <option value="">Select country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Netherlands</option>
                  <option>Australia</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                Place order request
              </button>
            </form>

            <div
              className="card"
              style={{
                borderRadius: "28px",
                padding: "26px",
                position: "sticky",
                top: "120px",
              }}
            >
              <h2 style={{ marginTop: 0, marginBottom: "16px" }}>Checkout notes</h2>

              <div style={{ display: "grid", gap: "14px" }}>
                <div
                  style={{
                    padding: "16px",
                    background: "#f9fafb",
                    borderRadius: "18px",
                    border: "1px solid #ececec",
                  }}
                >
                  <h4 style={{ margin: "0 0 8px" }}>Artwork review</h4>
                  <p style={{ margin: 0, color: "#6b7280", lineHeight: "1.7" }}>
                    Uploaded files may be reviewed before final production.
                  </p>
                </div>

                <div
                  style={{
                    padding: "16px",
                    background: "#f9fafb",
                    borderRadius: "18px",
                    border: "1px solid #ececec",
                  }}
                >
                  <h4 style={{ margin: "0 0 8px" }}>Bulk order support</h4>
                  <p style={{ margin: 0, color: "#6b7280", lineHeight: "1.7" }}>
                    For high-volume printing, our team can share custom quotes.
                  </p>
                </div>

                <div
                  style={{
                    padding: "16px",
                    background: "#f9fafb",
                    borderRadius: "18px",
                    border: "1px solid #ececec",
                  }}
                >
                  <h4 style={{ margin: "0 0 8px" }}>International-ready</h4>
                  <p style={{ margin: 0, color: "#6b7280", lineHeight: "1.7" }}>
                    Designed for premium business orders and global-facing brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}