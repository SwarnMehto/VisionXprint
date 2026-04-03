import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <section className="page-content vx-page-top-space">
        <div className="container">
          <div className="vx-auth-wrap">
            <form className="vx-auth-card">
              <h1>Login</h1>

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

              <p className="vx-auth-footer-text">
                Don’t have an account? <Link to="/register">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}