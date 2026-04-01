import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for custom print orders and business inquiries.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="grid grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div className="card">
              <h2 style={{ marginBottom: "12px" }}>Contact Details</h2>
              <p style={{ lineHeight: 1.9, color: "#475569" }}>
                Phone: +91 8700116436 <br />
                Email: visionxmediasolution@gmail.com <br />
                Brand: Vision X Print
              </p>
            </div>

            <form className="card">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Write your message" />
              </div>

              <button type="button" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}