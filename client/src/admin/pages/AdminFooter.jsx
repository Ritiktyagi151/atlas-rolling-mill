import { useEffect, useState } from "react";
import { getFooter, updateFooter } from "../services/footerService";
import FooterForm from "../components/footer/FooterForm";

const AdminFooter = () => {
  const [footer, setFooter] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchFooter = async () => {
    try {
      setLoading(true);

      const res = await getFooter();

      setFooter(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load footer.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  const handleSave = async (formData) => {
    try {
      await updateFooter(formData);

      alert("Footer updated successfully.");

      fetchFooter();
    } catch (error) {
      console.error(error);
      alert("Failed to update footer.");
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <h5>Loading...</h5>
      </div>
    );
  }

  return (
    <div className="container-fluid">

      <div className="mb-4">
        <h2 className="fw-bold">Footer Management</h2>

        <p className="text-muted">
          Update footer description, social links and contact information.
        </p>
      </div>

      <FooterForm
        footer={footer}
        onSave={handleSave}
      />

    </div>
  );
};

export default AdminFooter;