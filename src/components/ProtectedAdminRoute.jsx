export default function ProtectedAdminRoute({ children }) {
  const isAdmin = true;
  return isAdmin ? children : <div style={{ padding: "40px" }}>Access Denied</div>;
}