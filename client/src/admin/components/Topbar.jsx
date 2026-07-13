import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Topbar = () => {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <header className="topbar">
      <div className="topbar-title">
        <h4>Atlas Admin Panel</h4>
        <p>Welcome, {admin?.name}</p>
      </div>

      <div className="admin-user">
        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;