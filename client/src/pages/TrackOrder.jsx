import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [searched, setSearched] = useState(false);
  const [foundOrder, setFoundOrder] = useState(null);
  const [error, setError] = useState("");

  const handleTrackOrder = () => {
    setSearched(true);
    setError("");
    setFoundOrder(null);

    if (!orderId.trim()) {
      setError("Please enter your order ID");
      return;
    }

    const savedOrders = JSON.parse(localStorage.getItem("visionx_orders")) || [];

    const matchedOrder = savedOrders.find(
      (order) => order.orderId.toLowerCase() === orderId.trim().toLowerCase()
    );

    if (!matchedOrder) {
      setError("No order found with this Order ID");
      return;
    }

    setFoundOrder(matchedOrder);
  };

  return (
    <>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <h1>Track Order</h1>
          <p>Enter your order ID to check current status.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card track-order-card">
            <div className="form-group track-order-group">
              <label>Order ID</label>
              <input
                type="text"
                placeholder="Enter order ID"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="track-order-input"
              />
            </div>

            <button
              className="btn btn-primary track-order-btn"
              onClick={handleTrackOrder}
              type="button"
            >
              Track Now
            </button>

            {error && <p className="track-order-error">{error}</p>}

            {searched && foundOrder && (
              <div className="track-order-result">
                <div className="track-order-result-head">
                  <h3>Order Found</h3>
                  <span className={`track-order-status status-${foundOrder.status?.toLowerCase()}`}>
                    {foundOrder.status}
                  </span>
                </div>

                <div className="track-order-details">
                  <div className="track-order-row">
                    <span>Order ID</span>
                    <strong>{foundOrder.orderId}</strong>
                  </div>

                  <div className="track-order-row">
                    <span>Customer Name</span>
                    <strong>{foundOrder.customerName}</strong>
                  </div>

                  <div className="track-order-row">
                    <span>Email</span>
                    <strong>{foundOrder.customerEmail}</strong>
                  </div>

                  <div className="track-order-row">
                    <span>Product</span>
                    <strong>{foundOrder.productName}</strong>
                  </div>

                  <div className="track-order-row">
                    <span>Quantity</span>
                    <strong>{foundOrder.quantity}</strong>
                  </div>

                  <div className="track-order-row">
                    <span>Total Amount</span>
                    <strong>₹{foundOrder.total}</strong>
                  </div>

                  <div className="track-order-row">
                    <span>Payment Method</span>
                    <strong>{foundOrder.paymentMethod}</strong>
                  </div>

                  <div className="track-order-row">
                    <span>Order Date</span>
                    <strong>{foundOrder.orderDate}</strong>
                  </div>

                  <div className="track-order-row">
                    <span>Delivery Address</span>
                    <strong>{foundOrder.address}</strong>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}