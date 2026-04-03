import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Checkout() {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("visionx_cart")) || [];
  const user =
    JSON.parse(localStorage.getItem("visionx_user")) ||
    JSON.parse(localStorage.getItem("userInfo"));

  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "Cash on Delivery",
  });

  const [error, setError] = useState("");

  const totalAmount = useMemo(() => {
    return cart.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const quantity = Number(item.quantity) || 1;
      return sum + price * quantity;
    }, 0);
  }, [cart]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const generateOrderId = () => {
    return `VXP${Date.now().toString().slice(-8)}`;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pincode
    ) {
      setError("Please fill all required fields");
      return;
    }

    if (!cart.length) {
      setError("Your cart is empty");
      return;
    }

    const orderDate = new Date().toLocaleDateString("en-IN");

    const newOrder = {
      orderId: generateOrderId(),
      customerName: formData.fullName,
      customerEmail: formData.email,
      phone: formData.phone,
      address: `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
      paymentMethod: formData.paymentMethod,
      items: cart,
      productName:
        cart.length === 1
          ? cart[0]?.name || "Custom Product"
          : `${cart.length} Items`,
      quantity: cart.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0),
      total: totalAmount,
      status: "Processing",
      orderDate,
    };

    const existingOrders = JSON.parse(localStorage.getItem("visionx_orders")) || [];
    existingOrders.push(newOrder);

    localStorage.setItem("visionx_orders", JSON.stringify(existingOrders));
    localStorage.removeItem("visionx_cart");

    window.dispatchEvent(new Event("cartUpdated"));
    navigate("/order-success");
  };

  return (
    <>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <h1>Checkout</h1>
          <p>Fill your details to place the order.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="checkout-layout">
            <form className="card checkout-form-card" onSubmit={handlePlaceOrder}>
              <h2>Billing Details</h2>

              <div className="checkout-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                  />
                </div>

                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                  />
                </div>

                <div className="form-group">
                  <label>Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter pincode"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter full address"
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label>Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option>Cash on Delivery</option>
                  <option>UPI</option>
                  <option>Card Payment</option>
                  <option>Bank Transfer</option>
                </select>
              </div>

              {error && <p className="track-order-error">{error}</p>}

              <button type="submit" className="btn btn-primary checkout-btn">
                Place Order
              </button>
            </form>

            <div className="card checkout-summary-card">
              <h2>Order Summary</h2>

              {cart.length ? (
                <div className="checkout-summary-list">
                  {cart.map((item, index) => (
                    <div key={index} className="checkout-summary-item">
                      <div>
                        <h4>{item.name || "Custom Product"}</h4>
                        <p>Qty: {item.quantity || 1}</p>
                      </div>
                      <strong>₹{(Number(item.price) || 0) * (Number(item.quantity) || 1)}</strong>
                    </div>
                  ))}

                  <div className="checkout-summary-total">
                    <span>Total</span>
                    <strong>₹{totalAmount}</strong>
                  </div>
                </div>
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}