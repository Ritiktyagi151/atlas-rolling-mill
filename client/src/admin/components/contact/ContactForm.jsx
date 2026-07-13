import { useEffect, useState } from "react";
import ContactSection from "./ContactSection";
import AddressSection from "./AddressSection";

const ContactForm = ({ contact, onSave }) => {
  const [formData, setFormData] = useState({
    phones: [],
    emails: [],
    addresses: [],
  });

  useEffect(() => {
    if (contact) {
      setFormData({
        phones: contact.phones || [],
        emails: contact.emails || [],
        addresses: contact.addresses || [],
      });
    }
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ContactSection
        contact={{
          phones: formData.phones,
          emails: formData.emails,
        }}
        setContact={(data) =>
          setFormData({
            ...formData,
            phones: data.phones,
            emails: data.emails,
          })
        }
      />

      <AddressSection
        addresses={formData.addresses}
        setAddresses={(addresses) =>
          setFormData({
            ...formData,
            addresses,
          })
        }
      />

      <div className="text-end">
        <button
          type="submit"
          className="btn btn-primary px-4"
        >
          Save Contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;