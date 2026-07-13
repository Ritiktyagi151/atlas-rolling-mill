import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/admin.css";
import "../bootstrap";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-content">
        <Topbar />

        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;