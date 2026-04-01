import { Link } from "react-router-dom";

export default function Navbar() {
  const cart = JSON.parse(localStorage.getItem("visionx_cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <>
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Premium custom printing for global brands, events and business growth.</span>
          <span>Fast support for bulk and custom orders</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header-inner">
          <Link to="/" className="logo-block">
            <div className="logo-icon">VX</div>
            <div className="logo-text">
              <strong>Vision X Print</strong>
              <span>Custom Print Studio</span>
            </div>
          </Link>

          <div className="header-search">
            <input type="text" placeholder="Search custom products" />
            <button type="button">⌕</button>
          </div>

          <nav className="header-nav">
            <Link to="/products">Products</Link>
            <Link to="/bulk-order">Bulk</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Sign in</Link>
            <Link to="/cart" className="header-cart">
              Cart ({totalItems})
            </Link>
          </nav>
        </div>
      </header>

      <div className="category-strip">
        <div className="container category-strip-inner">
          <Link to="/products">All Products</Link>
          <Link to="/category/visiting-cards">Business Cards</Link>
          <Link to="/category/id-cards">ID Cards</Link>
          <Link to="/category/lanyards">Lanyards</Link>
          <Link to="/category/acrylic-keychains">Acrylic Keychains</Link>
          <Link to="/category/mugs">Mugs</Link>
          <Link to="/bulk-order">Corporate Bulk Orders</Link>
        </div>
      </div>
    </>
  );
}