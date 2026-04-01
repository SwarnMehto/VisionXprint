import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <Navbar />
      <section className="page-content">
        <div className="container" style={{ maxWidth: "520px" }}>
          <form className="card">
            <h1 style={{ marginBottom: "20px" }}>Create Account</h1>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter full name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create password" />
            </div>

            <button className="btn btn-primary" type="button">
              Register
            </button>

            <p style={{ marginTop: "16px" }}>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}