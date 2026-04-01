import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";
import DesignStudio from "./pages/DesignStudio";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import TrackOrder from "./pages/TrackOrder";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyAccount from "./pages/MyAccount";
import SavedDesigns from "./pages/SavedDesigns";
import BulkOrder from "./pages/BulkOrder";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";

import AdminDashboard from "./admin/AdminDashboard";
import AdminProducts from "./admin/AdminProducts";
import AdminOrders from "./admin/AdminOrders";
import AdminCustomers from "./admin/AdminCustomers";
import AdminCoupons from "./admin/AdminCoupons";
import AdminSettings from "./admin/AdminSettings";

import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

import "./App.css";

export default function App() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/design-studio" element={<DesignStudio />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/track-order" element={<TrackOrder />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/saved-designs" element={<SavedDesigns />} />
      <Route path="/bulk-order" element={<BulkOrder />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />

      {/* Admin Pages */}
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <AdminDashboard />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <ProtectedAdminRoute>
            <AdminProducts />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <ProtectedAdminRoute>
            <AdminOrders />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/customers"
        element={
          <ProtectedAdminRoute>
            <AdminCustomers />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/coupons"
        element={
          <ProtectedAdminRoute>
            <AdminCoupons />
          </ProtectedAdminRoute>
        }
      />
      <Route
        path="/admin/settings"
        element={
          <ProtectedAdminRoute>
            <AdminSettings />
          </ProtectedAdminRoute>
        }
      />
    </Routes>
  );
}