import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("visionx_cart")) || [];
    setCartItems(cart);
  }, []);

  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem("visionx_cart", JSON.stringify(updatedItems));
  };

  const handleRemove = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    updateCart(updatedItems);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const quantity = Number(newQuantity);
        return {
          ...item,
          quantity,
          totalPrice: item.price * quantity,
        };
      }
      return item;
    });

    updateCart(updatedItems);
  };

  const grandTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
  }, [cartItems]);

  return (
    <>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <h1>Your cart</h1>
          <p>
            Review your selected products before continuing to secure checkout.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          {cartItems.length === 0 ? (
            <div
              className="card"
              style={{
                borderRadius: "28px",
                textAlign: "center",
                padding: "60px 20px",
              }}
            >
              <h2 style={{ marginBottom: "10px" }}>Your cart is empty</h2>
              <p style={{ color: "#6b7280", marginBottom: "20px" }}>
                Explore products and add premium custom items to your cart.
              </p>
              <Link to="/products" className="btn btn-primary">
                Explore products
              </Link>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 0.8fr",
                gap: "24px",
                alignItems: "start",
              }}
            >
              <div style={{ display: "grid", gap: "18px" }}>
                {cartItems.map((item) => (
                  <div key={item.id} className="card" style={{ borderRadius: "26px" }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "180px 1fr",
                        gap: "20px",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "18px",
                          background: "#f3f4f6",
                        }}
                      />

                      <div>
                        <h3 style={{ margin: "0 0 8px" }}>{item.name}</h3>
                        <p style={{ margin: "0 0 6px", color: "#6b7280" }}>
                          Size: {item.size}
                        </p>
                        <p style={{ margin: "0 0 6px", color: "#6b7280" }}>
                          Material: {item.material}
                        </p>
                        <p style={{ margin: "0 0 12px", color: "#6b7280" }}>
                          Print Side: {item.printSide}
                        </p>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            flexWrap: "wrap",
                          }}
                        >
                          <select
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item.id, e.target.value)
                            }
                            style={{
                              padding: "12px 14px",
                              borderRadius: "999px",
                              border: "1px solid #d1d5db",
                            }}
                          >
                            {[1, 2, 5, 10, 25, 50, 100, 250, 500].map((qty) => (
                              <option key={qty} value={qty}>
                                Qty {qty}
                              </option>
                            ))}
                          </select>

                          <span
                            style={{
                              fontWeight: "700",
                              color: "#111827",
                              fontSize: "18px",
                            }}
                          >
                            {formatCurrency(item.totalPrice)}
                          </span>

                          <button onClick={() => handleRemove(item.id)} className="btn btn-outline">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="card"
                style={{
                  borderRadius: "28px",
                  padding: "26px",
                  position: "sticky",
                  top: "120px",
                }}
              >
                <h2 style={{ marginTop: 0, marginBottom: "18px" }}>Order summary</h2>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                    color: "#6b7280",
                  }}
                >
                  <span>Total items</span>
                  <span>{cartItems.length}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                    color: "#6b7280",
                  }}
                >
                  <span>Estimated shipping</span>
                  <span>Calculated at checkout</span>
                </div>

                <div
                  style={{
                    borderTop: "1px solid #ececec",
                    paddingTop: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                    fontWeight: "800",
                    fontSize: "22px",
                  }}
                >
                  <span>Total</span>
                  <span>{formatCurrency(grandTotal)}</span>
                </div>

                <Link
                  to="/checkout"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Continue to checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}