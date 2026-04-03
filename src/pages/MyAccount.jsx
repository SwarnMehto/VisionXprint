import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MyAccount() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const storedVisionUser = localStorage.getItem("visionx_user");
    const storedUserInfo = localStorage.getItem("userInfo");

    if (storedVisionUser) {
      setUser(JSON.parse(storedVisionUser));
    } else if (storedUserInfo) {
      const parsedUser = JSON.parse(storedUserInfo);
      setUser(parsedUser);
    } else {
      navigate("/login");
      return;
    }

    const allOrders = JSON.parse(localStorage.getItem("visionx_orders")) || [];
    const latestOrders = allOrders.slice().reverse().slice(0, 5);
    setRecentOrders(latestOrders);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("visionx_user");
    localStorage.removeItem("visionx_token");
    localStorage.removeItem("userInfo");

    window.dispatchEvent(new Event("authChanged"));
    navigate("/login");
  };

  if (!user) return null;

  return (
    <>
      <Navbar />

      <section className="vx-account-page">
        <div className="container">
          <div className="vx-account-layout">
            <aside className="vx-account-sidebar">
              <div className="vx-account-profile-card">
                <div className="vx-account-avatar">
                  {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>

                <h2>{user?.name || "User"}</h2>
                <p>{user?.email || "No email found"}</p>
              </div>

              <div className="vx-account-side-links">
                <Link to="/my-account" className="vx-account-side-link active">
                  Dashboard
                </Link>

                <Link to="/track-order" className="vx-account-side-link">
                  Track Order
                </Link>

                <Link to="/saved-designs" className="vx-account-side-link">
                  Saved Designs
                </Link>

                <Link to="/design-studio" className="vx-account-side-link">
                  Design Studio
                </Link>

                <Link to="/products" className="vx-account-side-link">
                  Shop Products
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="vx-account-logout-btn"
                >
                  Logout
                </button>
              </div>
            </aside>

            <div className="vx-account-main">
              <div className="vx-account-welcome-card">
                <h1>Welcome, {user?.name || "User"}</h1>
                <p>
                  Manage your profile, orders, saved designs and printing
                  activity from your account dashboard.
                </p>
              </div>

              <div className="vx-account-grid">
                <div className="vx-account-card">
                  <h3>Account Details</h3>

                  <div className="vx-account-info-list">
                    <div className="vx-account-info-item">
                      <span>Full Name</span>
                      <strong>{user?.name || "N/A"}</strong>
                    </div>

                    <div className="vx-account-info-item">
                      <span>Email Address</span>
                      <strong>{user?.email || "N/A"}</strong>
                    </div>

                    <div className="vx-account-info-item">
                      <span>Account Type</span>
                      <strong>User</strong>
                    </div>

                    <div className="vx-account-info-item">
                      <span>Status</span>
                      <strong>Active</strong>
                    </div>
                  </div>
                </div>

                <div className="vx-account-card">
                  <h3>Quick Actions</h3>

                  <div className="vx-account-actions">
                    <Link to="/products" className="vx-account-action-box">
                      <h4>Start New Order</h4>
                      <p>Browse products and place your next print order.</p>
                    </Link>

                    <Link to="/track-order" className="vx-account-action-box">
                      <h4>Track Orders</h4>
                      <p>Check the current status of your order easily.</p>
                    </Link>

                    <Link to="/saved-designs" className="vx-account-action-box">
                      <h4>Saved Designs</h4>
                      <p>View your saved design work and continue editing.</p>
                    </Link>

                    <Link to="/design-studio" className="vx-account-action-box">
                      <h4>Design Studio</h4>
                      <p>Create or customize your next product design.</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="vx-account-card vx-account-orders-card">
                <div className="vx-account-card-head">
                  <h3>Recent Orders</h3>
                  <Link to="/track-order">View All</Link>
                </div>

                {recentOrders.length > 0 ? (
                  <div className="vx-account-orders-list">
                    {recentOrders.map((order) => (
                      <div key={order.orderId} className="vx-account-order-item">
                        <div className="vx-account-order-top">
                          <h4>{order.productName}</h4>
                          <span className={`vx-order-status ${order.status?.toLowerCase()}`}>
                            {order.status}
                          </span>
                        </div>

                        <div className="vx-account-order-meta">
                          <p>
                            <strong>Order ID:</strong> {order.orderId}
                          </p>
                          <p>
                            <strong>Quantity:</strong> {order.quantity}
                          </p>
                          <p>
                            <strong>Total:</strong> ₹{order.total}
                          </p>
                          <p>
                            <strong>Date:</strong> {order.orderDate}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="vx-account-empty-state">
                    <h4>No recent orders found</h4>
                    <p>
                      Once you place orders, your recent order activity will show
                      here.
                    </p>

                    <Link to="/products" className="vx-account-primary-btn">
                      Explore Products
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}