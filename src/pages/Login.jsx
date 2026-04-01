import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Navbar />
      <section className="page-content">
        <div className="container" style={{ maxWidth: "520px" }}>
          <form className="card">
            <h1 style={{ marginBottom: "20px" }}>Login</h1>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>

            <button className="btn btn-primary" type="button">
              Login
            </button>

            <p style={{ marginTop: "16px" }}>
              Don’t have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}