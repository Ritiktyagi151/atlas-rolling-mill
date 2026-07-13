import { NavLink } from "react-router-dom";
import {
  FaBoxOpen,
  FaLayerGroup,
  FaBlog,
  FaBars,
  FaImage,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaColumns, 
} from "react-icons/fa";

const Sidebar = () => {
  const menus = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Products",
      path: "/admin/products",
      icon: <FaBoxOpen />,
    },
    {
      name: "Categories",
      path: "/admin/categories",
      icon: <FaLayerGroup />,
    },
    {
      name: "Blogs",
      path: "/admin/blogs",
      icon: <FaBlog />,
    },
    {
      name: "Navbar",
      path: "/admin/navbar",
      icon: <FaBars />,
    },
    {
  name: "Events",
  path: "/admin/events",
  icon: <FaImage />,
},
    {
      name: "Contact",
      path: "/admin/contact",
      icon: <FaPhoneAlt />,
    },
    {
      name: "Footer",
      path: "/admin/footer",
      icon: <FaEnvelope />,
    },
    {
      name: "Enquiries",
      path: "/admin/enquiries",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-logo">
        <img src="/images/logo/atlas-logo-final.png" alt="Atlas" />
      </div>

      <div className="sidebar-menu">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            {menu.icon}
            <span>{menu.name}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;