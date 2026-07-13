import { useEffect, useState } from "react";
import ContactForm from "../components/contact/ContactForm";
import {
  getContact,
  updateContact,
} from "../services/contactService";

const Contact = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchContact = async () => {
    try {
      const res = await getContact();
      setContact(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load contact.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

  const handleSave = async (formData) => {
    try {
      await updateContact(formData);

      alert("Contact updated successfully.");

      fetchContact();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        Loading...
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="mb-4">
        <h2 className="fw-bold">
          Contact Management
        </h2>

        <p className="text-muted">
          Manage phone numbers, email IDs and addresses.
        </p>
      </div>

      <ContactForm
        contact={contact}
        onSave={handleSave}
      />
    </div>
  );
};

export default Contact;