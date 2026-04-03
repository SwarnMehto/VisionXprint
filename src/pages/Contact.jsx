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

      <section className="page-content vx-page-top-space">
        <div className="container">
          <div className="vx-form-grid-2">
            <div className="vx-info-card vx-contact-details">
              <h2>Contact Details</h2>
              <p>
                <strong>Phone:</strong> +91 8700116436
              </p>
              <p>
                <strong>Email:</strong> visionxmediasolution@gmail.com
              </p>
              <p>
                <strong>Brand:</strong> Vision X Print
              </p>
            </div>

            <form className="vx-form-card">
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