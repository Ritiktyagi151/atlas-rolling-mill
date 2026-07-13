import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { admin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <h4 className="text-center mt-5">Loading...</h4>;
  }

  if (!admin) {
    return (
      <Navigate
        to="/admin"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;