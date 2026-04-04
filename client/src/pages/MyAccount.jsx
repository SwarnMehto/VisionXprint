import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./MyAccount.css";

export default function MyAccount() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("dashboard");
  const [user, setUser] = useState({
    name: "Swarn",
    email: "yourmail@example.com",
    phone: "+91 9876543210",
    address: "Gurgaon, Haryana, India",
  });

  const [orders, setOrders] = useState([]);
  const [savedDesigns, setSavedDesigns] = useState([]);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState(user);

  useEffect(() => {
    const savedUser =
      JSON.parse(localStorage.getItem("visionx_user")) ||
      JSON.parse(localStorage.getItem("user"));

    const savedOrders =
      JSON.parse(localStorage.getItem("visionx_orders")) || [];

    const savedDesignsData =
      JSON.parse(localStorage.getItem("visionx_saved_designs")) || [];

    if (savedUser) {
      const safeUser = {
        name: savedUser.name || "Swarn",
        email: savedUser.email || "yourmail@example.com",
        phone: savedUser.phone || "+91 9876543210",
        address: savedUser.address || "Gurgaon, Haryana, India",
      };
      setUser(safeUser);
      setProfileForm(safeUser);
    }

    if (savedOrders.length > 0) {
      setOrders(savedOrders);
    } else {
      const demoOrders = [
        {
          id: "VXP10241",
          product: "Visiting Card",
          date: "04 Apr 2026",
          status: "Delivered",
          amount: 499,
        },
        {
          id: "VXP10242",
          product: "Custom Mug",
          date: "03 Apr 2026",
          status: "Processing",
          amount: 799,
        },
        {
          id: "VXP10243",
          product: "ID Card with Lanyard",
          date: "01 Apr 2026",
          status: "Pending",
          amount: 1299,
        },
      ];
      setOrders(demoOrders);
      localStorage.setItem("visionx_orders", JSON.stringify(demoOrders));
    }

    if (savedDesignsData.length > 0) {
      setSavedDesigns(savedDesignsData);
    } else {
      const demoDesigns = [
        {
          id: 1,
          title: "Bakery Visiting Card",
          category: "Visiting Card",
          updatedAt: "2 days ago",
        },
        {
          id: 2,
          title: "Gym Bottle Label",
          category: "Sticker Design",
          updatedAt: "5 days ago",
        },
        {
          id: 3,
          title: "School ID Card Layout",
          category: "ID Card",
          updatedAt: "1 week ago",
        },
      ];
      setSavedDesigns(demoDesigns);
      localStorage.setItem(
        "visionx_saved_designs",
        JSON.stringify(demoDesigns)
      );
    }
  }, []);

  const stats = useMemo(() => {
    const totalOrders = orders.length;
    const pendingOrders = orders.filter(
      (order) =>
        order.status?.toLowerCase() === "pending" ||
        order.status?.toLowerCase() === "processing"
    ).length;
    const deliveredOrders = orders.filter(
      (order) => order.status?.toLowerCase() === "delivered"
    ).length;
    const totalSavedDesigns = savedDesigns.length;

    return {
      totalOrders,
      pendingOrders,
      deliveredOrders,
      totalSavedDesigns,
    };
  }, [orders, savedDesigns]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    setUser(profileForm);
    localStorage.setItem("visionx_user", JSON.stringify(profileForm));
    setIsEditingProfile(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("visionx_user");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const renderStatusBadge = (status) => {
    const lower = status?.toLowerCase();

    if (lower === "delivered") {
      return <span className="vx-badge delivered">Delivered</span>;
    }

    if (lower === "processing") {
      return <span className="vx-badge processing">Processing</span>;
    }

    return <span className="vx-badge pending">Pending</span>;
  };

  return (
    <>
      <Navbar />

      <section className="vx-account-page">
        <div className="vx-account-container">
          <div className="vx-account-top">
            <div>
              <p className="vx-small-label">Vision X Print Account</p>
              <h1>
                Welcome back, <span>{user.name}</span> 👋
              </h1>
              <p className="vx-subtext">
                Manage your orders, saved designs and profile from one place.
              </p>
            </div>

            <div className="vx-top-actions">
              <Link to="/products" className="vx-primary-btn">
                Order Now
              </Link>
              <Link to="/track-order" className="vx-secondary-btn">
                Track Order
              </Link>
            </div>
          </div>

          <div className="vx-account-layout">
            <aside className="vx-sidebar">
              <div className="vx-user-card">
                <div className="vx-avatar">
                  {user.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>

              <button
                className={`vx-side-link ${
                  activeTab === "dashboard" ? "active" : ""
                }`}
                onClick={() => setActiveTab("dashboard")}
              >
                Dashboard
              </button>

              <button
                className={`vx-side-link ${
                  activeTab === "orders" ? "active" : ""
                }`}
                onClick={() => setActiveTab("orders")}
              >
                My Orders
              </button>

              <button
                className={`vx-side-link ${
                  activeTab === "designs" ? "active" : ""
                }`}
                onClick={() => setActiveTab("designs")}
              >
                Saved Designs
              </button>

              <button
                className={`vx-side-link ${
                  activeTab === "profile" ? "active" : ""
                }`}
                onClick={() => setActiveTab("profile")}
              >
                Profile
              </button>

              <button className="vx-side-link logout" onClick={handleLogout}>
                Logout
              </button>
            </aside>

            <main className="vx-main-content">
              {activeTab === "dashboard" && (
                <>
                  <div className="vx-stats-grid">
                    <div className="vx-stat-card">
                      <div className="vx-stat-icon">📦</div>
                      <div>
                        <h3>{stats.totalOrders}</h3>
                        <p>Total Orders</p>
                      </div>
                    </div>

                    <div className="vx-stat-card">
                      <div className="vx-stat-icon">⏳</div>
                      <div>
                        <h3>{stats.pendingOrders}</h3>
                        <p>Pending / Processing</p>
                      </div>
                    </div>

                    <div className="vx-stat-card">
                      <div className="vx-stat-icon">✅</div>
                      <div>
                        <h3>{stats.deliveredOrders}</h3>
                        <p>Delivered Orders</p>
                      </div>
                    </div>

                    <div className="vx-stat-card">
                      <div className="vx-stat-icon">🎨</div>
                      <div>
                        <h3>{stats.totalSavedDesigns}</h3>
                        <p>Saved Designs</p>
                      </div>
                    </div>
                  </div>

                  <div className="vx-grid-two">
                    <div className="vx-card">
                      <div className="vx-card-head">
                        <h2>Quick Actions</h2>
                      </div>

                      <div className="vx-quick-actions">
                        <Link to="/products" className="vx-quick-card">
                          <span>🛒</span>
                          <h4>Shop Products</h4>
                          <p>Start a new print order quickly.</p>
                        </Link>

                        <Link to="/track-order" className="vx-quick-card">
                          <span>🚚</span>
                          <h4>Track Order</h4>
                          <p>Check latest order progress anytime.</p>
                        </Link>

                        <Link to="/contact" className="vx-quick-card">
                          <span>💬</span>
                          <h4>Need Help?</h4>
                          <p>Talk to support for bulk or custom orders.</p>
                        </Link>
                      </div>
                    </div>

                    <div className="vx-card">
                      <div className="vx-card-head">
                        <h2>Profile Summary</h2>
                      </div>

                      <div className="vx-profile-summary">
                        <div className="vx-profile-row">
                          <span>Name</span>
                          <strong>{user.name}</strong>
                        </div>
                        <div className="vx-profile-row">
                          <span>Email</span>
                          <strong>{user.email}</strong>
                        </div>
                        <div className="vx-profile-row">
                          <span>Phone</span>
                          <strong>{user.phone}</strong>
                        </div>
                        <div className="vx-profile-row">
                          <span>Address</span>
                          <strong>{user.address}</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="vx-card">
                    <div className="vx-card-head">
                      <h2>Recent Orders</h2>
                      <button
                        className="vx-inline-btn"
                        onClick={() => setActiveTab("orders")}
                      >
                        View All
                      </button>
                    </div>

                    <div className="vx-table-wrap">
                      <table className="vx-table">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.slice(0, 3).map((order) => (
                            <tr key={order.id}>
                              <td>{order.id}</td>
                              <td>{order.product}</td>
                              <td>{order.date}</td>
                              <td>{renderStatusBadge(order.status)}</td>
                              <td>₹{order.amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "orders" && (
                <div className="vx-card">
                  <div className="vx-card-head">
                    <h2>My Orders</h2>
                  </div>

                  {orders.length === 0 ? (
                    <div className="vx-empty-state">
                      <h3>No orders found</h3>
                      <p>You have not placed any orders yet.</p>
                      <Link to="/products" className="vx-primary-btn">
                        Start Shopping
                      </Link>
                    </div>
                  ) : (
                    <div className="vx-orders-list">
                      {orders.map((order) => (
                        <div className="vx-order-item" key={order.id}>
                          <div>
                            <h3>{order.product}</h3>
                            <p>Order ID: {order.id}</p>
                            <p>Date: {order.date}</p>
                          </div>

                          <div className="vx-order-right">
                            {renderStatusBadge(order.status)}
                            <strong>₹{order.amount}</strong>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === "designs" && (
                <div className="vx-card">
                  <div className="vx-card-head">
                    <h2>Saved Designs</h2>
                  </div>

                  {savedDesigns.length === 0 ? (
                    <div className="vx-empty-state">
                      <h3>No saved designs</h3>
                      <p>Your custom design drafts will appear here.</p>
                    </div>
                  ) : (
                    <div className="vx-design-grid">
                      {savedDesigns.map((design) => (
                        <div className="vx-design-card" key={design.id}>
                          <div className="vx-design-thumb">🎨</div>
                          <h3>{design.title}</h3>
                          <p>{design.category}</p>
                          <span>Updated: {design.updatedAt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === "profile" && (
                <div className="vx-card">
                  <div className="vx-card-head">
                    <h2>Profile Details</h2>
                    {!isEditingProfile && (
                      <button
                        className="vx-inline-btn"
                        onClick={() => setIsEditingProfile(true)}
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>

                  {!isEditingProfile ? (
                    <div className="vx-profile-summary profile-page">
                      <div className="vx-profile-row">
                        <span>Name</span>
                        <strong>{user.name}</strong>
                      </div>
                      <div className="vx-profile-row">
                        <span>Email</span>
                        <strong>{user.email}</strong>
                      </div>
                      <div className="vx-profile-row">
                        <span>Phone</span>
                        <strong>{user.phone}</strong>
                      </div>
                      <div className="vx-profile-row">
                        <span>Address</span>
                        <strong>{user.address}</strong>
                      </div>
                    </div>
                  ) : (
                    <form className="vx-profile-form" onSubmit={handleProfileSave}>
                      <div className="vx-form-grid">
                        <div className="vx-form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            value={profileForm.name}
                            onChange={handleProfileChange}
                          />
                        </div>

                        <div className="vx-form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={profileForm.email}
                            onChange={handleProfileChange}
                          />
                        </div>

                        <div className="vx-form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            name="phone"
                            value={profileForm.phone}
                            onChange={handleProfileChange}
                          />
                        </div>

                        <div className="vx-form-group full">
                          <label>Address</label>
                          <textarea
                            name="address"
                            rows="4"
                            value={profileForm.address}
                            onChange={handleProfileChange}
                          />
                        </div>
                      </div>

                      <div className="vx-form-actions">
                        <button type="submit" className="vx-primary-btn">
                          Save Changes
                        </button>
                        <button
                          type="button"
                          className="vx-secondary-btn"
                          onClick={() => {
                            setProfileForm(user);
                            setIsEditingProfile(false);
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}