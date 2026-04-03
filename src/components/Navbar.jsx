import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const megaMenus = {
  all: {
    columns: [
      {
        title: "Business Essentials",
        links: [
          { label: "Visiting Cards", to: "/category/visiting-cards" },
          { label: "ID Cards", to: "/category/id-cards" },
          { label: "Lanyards", to: "/category/lanyards" },
          { label: "Acrylic Keychains", to: "/category/acrylic-keychains" },
          { label: "Mugs", to: "/category/mugs" },
          { label: "Bulk Orders", to: "/bulk-order" },
        ],
      },
      {
        title: "Corporate Printing",
        links: [
          { label: "Employee Welcome Kits", to: "/bulk-order" },
          { label: "Event Merchandise", to: "/bulk-order" },
          { label: "Team Branding", to: "/bulk-order" },
          { label: "Office Print Supplies", to: "/products" },
          { label: "Custom Packaging", to: "/products" },
        ],
      },
      {
        title: "Design & Customization",
        links: [
          { label: "Upload Your Artwork", to: "/design-studio" },
          { label: "Saved Designs", to: "/saved-designs" },
          { label: "Custom Design Requests", to: "/bulk-order" },
          { label: "Design Studio", to: "/design-studio" },
        ],
      },
      {
        title: "Help & Support",
        links: [
          { label: "Track Order", to: "/track-order" },
          { label: "FAQ", to: "/faq" },
          { label: "Contact Us", to: "/contact" },
          { label: "About Vision X Print", to: "/about" },
        ],
      },
    ],
    promo: {
      badge: "Popular",
      title: "Bright custom print solutions for growing brands",
      text: "Create polished business identity with cards, ID kits, lanyards and premium branded merchandise.",
      cta: "Explore Products",
      to: "/products",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
    },
  },

  visitingCards: {
    columns: [
      {
        title: "Card Types",
        links: [
          { label: "Standard Visiting Cards", to: "/category/visiting-cards" },
          { label: "Premium Visiting Cards", to: "/category/visiting-cards" },
          { label: "Matte Finish Cards", to: "/category/visiting-cards" },
          { label: "Glossy Business Cards", to: "/category/visiting-cards" },
          { label: "Corporate Identity Cards", to: "/category/visiting-cards" },
        ],
      },
      {
        title: "Solutions",
        links: [
          { label: "Startup Branding", to: "/bulk-order" },
          { label: "Agency Teams", to: "/bulk-order" },
          { label: "Conference Handouts", to: "/bulk-order" },
          { label: "Luxury Presentation Cards", to: "/category/visiting-cards" },
        ],
      },
    ],
    promo: {
      badge: "Best Seller",
      title: "Visiting cards with clean global presentation",
      text: "Bright, sharp and premium cards for founders, consultants and modern teams.",
      cta: "Shop Business Cards",
      to: "/category/visiting-cards",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80",
    },
  },

  idCards: {
    columns: [
      {
        title: "ID Card Solutions",
        links: [
          { label: "Employee ID Cards", to: "/category/id-cards" },
          { label: "Student ID Cards", to: "/category/id-cards" },
          { label: "Visitor Badges", to: "/category/id-cards" },
          { label: "Event Access Cards", to: "/category/id-cards" },
        ],
      },
      {
        title: "Related Products",
        links: [
          { label: "Lanyards", to: "/category/lanyards" },
          { label: "Bulk Corporate Orders", to: "/bulk-order" },
          { label: "Upload Artwork", to: "/design-studio" },
        ],
      },
    ],
    promo: {
      badge: "Corporate",
      title: "Smart ID solutions for teams and institutions",
      text: "Durable, clean and branded ID cards for onboarding, schools and events.",
      cta: "Explore ID Cards",
      to: "/category/id-cards",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    },
  },

  lanyards: {
    columns: [
      {
        title: "Lanyard Range",
        links: [
          { label: "Printed Lanyards", to: "/category/lanyards" },
          { label: "Corporate Lanyards", to: "/category/lanyards" },
          { label: "School Lanyards", to: "/category/lanyards" },
          { label: "Event Lanyards", to: "/category/lanyards" },
        ],
      },
      {
        title: "Popular Pairings",
        links: [
          { label: "ID Cards", to: "/category/id-cards" },
          { label: "Bulk Orders", to: "/bulk-order" },
          { label: "Custom Kits", to: "/bulk-order" },
        ],
      },
    ],
    promo: {
      badge: "Team Branding",
      title: "Custom lanyards for bright polished branding",
      text: "Ideal for events, employee kits, institutions and branded access systems.",
      cta: "Shop Lanyards",
      to: "/category/lanyards",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
  },

  acrylic: {
    columns: [
      {
        title: "Acrylic Products",
        links: [
          { label: "Acrylic Keychains", to: "/category/acrylic-keychains" },
          { label: "Logo Keychains", to: "/category/acrylic-keychains" },
          { label: "Name Keychains", to: "/category/acrylic-keychains" },
          { label: "Promotional Keychains", to: "/category/acrylic-keychains" },
        ],
      },
      {
        title: "Use Cases",
        links: [
          { label: "Gift Orders", to: "/bulk-order" },
          { label: "Brand Promotions", to: "/bulk-order" },
          { label: "Event Giveaways", to: "/bulk-order" },
        ],
      },
    ],
    promo: {
      badge: "Gifting",
      title: "Custom acrylic keychains with vibrant finish",
      text: "Perfect for giveaways, merch drops, campaigns and memorable gifts.",
      cta: "Explore Acrylic",
      to: "/category/acrylic-keychains",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    },
  },

  mugs: {
    columns: [
      {
        title: "Mug Styles",
        links: [
          { label: "Photo Mugs", to: "/category/mugs" },
          { label: "Corporate Mugs", to: "/category/mugs" },
          { label: "Gift Mugs", to: "/category/mugs" },
          { label: "Promotional Mugs", to: "/category/mugs" },
        ],
      },
      {
        title: "Popular Uses",
        links: [
          { label: "Client Gifts", to: "/bulk-order" },
          { label: "Team Merchandise", to: "/bulk-order" },
          { label: "Event Gifting", to: "/bulk-order" },
        ],
      },
    ],
    promo: {
      badge: "Gifts",
      title: "Custom mugs for bright branded gifting",
      text: "Premium custom mugs for offices, promotions, welcome kits and events.",
      cta: "Shop Mugs",
      to: "/category/mugs",
      image:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=900&q=80",
    },
  },
};

function MegaMenu({ menuKey }) {
  const menu = megaMenus[menuKey];
  if (!menu) return null;

  return (
    <div className="mega-menu-premium">
      <div className="container">
        <div className="mega-menu-layout">
          <div
            className="mega-menu-columns"
            style={{
              gridTemplateColumns: `repeat(${menu.columns.length}, minmax(160px, 1fr))`,
            }}
          >
            {menu.columns.map((section) => (
              <div key={section.title} className="mega-menu-column">
                <h4>{section.title}</h4>
                <div className="mega-menu-links">
                  {section.links.map((link) => (
                    <Link key={link.label} to={link.to}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mega-menu-promo">
            <div className="mega-menu-promo-image-wrap">
              <img src={menu.promo.image} alt={menu.promo.title} />
              <span className="mega-menu-badge">{menu.promo.badge}</span>
            </div>

            <div className="mega-menu-promo-content">
              <h3>{menu.promo.title}</h3>
              <p>{menu.promo.text}</p>
              <Link to={menu.promo.to} className="btn btn-primary">
                {menu.promo.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updateNavbarState = () => {
      const cart = JSON.parse(localStorage.getItem("visionx_cart")) || [];
      const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
      setCartCount(totalItems);

      const storedUser = localStorage.getItem("visionx_user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    updateNavbarState();

    window.addEventListener("storage", updateNavbarState);
    window.addEventListener("authChanged", updateNavbarState);
    window.addEventListener("cartUpdated", updateNavbarState);

    return () => {
      window.removeEventListener("storage", updateNavbarState);
      window.removeEventListener("authChanged", updateNavbarState);
      window.removeEventListener("cartUpdated", updateNavbarState);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("visionx_user");
    localStorage.removeItem("visionx_token");
    window.dispatchEvent(new Event("authChanged"));
    navigate("/login");
  };

  return (
    <>
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>Vision X Print Works On Your Vision.</span>
          <span>Fast support for custom and bulk orders</span>
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

            {user ? (
              <>
                <Link to="/my-account">
                  {user?.name ? `My Account (${user.name})` : "My Account"}
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="header-logout-btn"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">Sign in</Link>
            )}

            <Link to="/cart" className="header-cart">
              Cart ({cartCount})
            </Link>
          </nav>
        </div>
      </header>

      <div className="category-strip">
        <div className="container category-strip-inner">
          <div className="nav-item-with-mega">
            <Link to="/products">View All</Link>
            <MegaMenu menuKey="all" />
          </div>

          <div className="nav-item-with-mega">
            <Link to="/category/visiting-cards">Visiting Cards</Link>
            <MegaMenu menuKey="visitingCards" />
          </div>

          <div className="nav-item-with-mega">
            <Link to="/category/id-cards">ID Cards</Link>
            <MegaMenu menuKey="idCards" />
          </div>

          <div className="nav-item-with-mega">
            <Link to="/category/lanyards">Lanyards</Link>
            <MegaMenu menuKey="lanyards" />
          </div>

          <div className="nav-item-with-mega">
            <Link to="/category/acrylic-keychains">Acrylic Keychains</Link>
            <MegaMenu menuKey="acrylic" />
          </div>

          <div className="nav-item-with-mega">
            <Link to="/category/mugs">Mugs</Link>
            <MegaMenu menuKey="mugs" />
          </div>

          <Link to="/bulk-order">Corporate Bulk Orders</Link>
        </div>
      </div>
    </>
  );
}