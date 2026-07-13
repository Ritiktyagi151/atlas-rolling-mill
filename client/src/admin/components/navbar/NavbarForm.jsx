import { useEffect, useState } from "react";
import AnnouncementSection from "./AnnouncementSection";
import MenuSection from "./MenuSection";

const NavbarForm = ({ navbar, categories, products, onSave }) => {
  const [formData, setFormData] = useState({
    announcements: [],
    menuItems: [],
  });

  useEffect(() => {
    if (navbar) {
      setFormData({
        announcements: navbar.announcements || [],
        menuItems: navbar.menuItems || [],
      });
    }
  }, [navbar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <AnnouncementSection
        announcements={formData.announcements}
        setAnnouncements={(announcements) =>
          setFormData({
            ...formData,
            announcements,
          })
        }
      />

      <MenuSection
        menuItems={formData.menuItems}
        setMenuItems={(menuItems) =>
          setFormData({
            ...formData,
            menuItems,
          })
        }
        categories={categories}
        products={products}
      />

      <div className="text-end">
        <button
          type="submit"
          className="btn btn-primary px-4"
        >
          Save Navbar
        </button>
      </div>
    </form>
  );
};

export default NavbarForm;