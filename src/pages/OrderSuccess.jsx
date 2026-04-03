import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OrderSuccess() {
  const orders = JSON.parse(localStorage.getItem("visionx_orders")) || [];
  const latestOrder = orders.length ? orders[orders.length - 1] : null;

  return (
    <>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <h1>Order Successful</h1>
          <p>Your order has been placed successfully.</p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="card order-success-card">
            {latestOrder ? (
              <>
                <div className="order-success-badge">Success</div>

                <h2>Your order is confirmed</h2>
                <p className="order-success-text">
                  Thank you for your order. Your order details are below.
                </p>

                <div className="order-success-details">
                  <div className="order-success-row">
                    <span>Order ID</span>
                    <strong>{latestOrder.orderId}</strong>
                  </div>

                  <div className="order-success-row">
                    <span>Product</span>
                    <strong>{latestOrder.productName}</strong>
                  </div>

                  <div className="order-success-row">
                    <span>Quantity</span>
                    <strong>{latestOrder.quantity}</strong>
                  </div>

                  <div className="order-success-row">
                    <span>Total</span>
                    <strong>₹{latestOrder.total}</strong>
                  </div>

                  <div className="order-success-row">
                    <span>Status</span>
                    <strong>{latestOrder.status}</strong>
                  </div>
                </div>

                <div className="order-success-actions">
                  <Link to="/track-order" className="btn btn-primary">
                    Track Order
                  </Link>
                  <Link to="/my-account" className="btn btn-secondary">
                    Go to My Account
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h2>No recent order found</h2>
                <p className="order-success-text">
                  Please place an order first to see order details here.
                </p>

                <div className="order-success-actions">
                  <Link to="/products" className="btn btn-primary">
                    Explore Products
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}