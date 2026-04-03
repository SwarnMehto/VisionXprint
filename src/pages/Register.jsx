import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { registerUser } from "../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      const data = await registerUser(formData);

      localStorage.setItem("userInfo", JSON.stringify(data));

      localStorage.setItem(
        "visionx_user",
        JSON.stringify({
          name: data?.name || formData.name,
          email: data?.email || formData.email,
          ...data,
        })
      );

      if (data?.token) {
        localStorage.setItem("visionx_token", data.token);
      } else {
        localStorage.setItem("visionx_token", "loggedin");
      }

      window.dispatchEvent(new Event("authChanged"));
      navigate("/my-account");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="vx-auth-page">
        <div className="vx-auth-card">
          <h1 className="vx-auth-title">Create Account</h1>

          <form onSubmit={handleSubmit} className="vx-auth-form">
            <div className="vx-auth-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="vx-auth-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="vx-auth-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {error && <p className="vx-auth-error">{error}</p>}

            <button className="vx-auth-btn" type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>

            <p className="vx-auth-footer-text">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}