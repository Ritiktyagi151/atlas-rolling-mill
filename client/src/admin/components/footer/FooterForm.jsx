import { useEffect, useState } from "react";
import SocialTable from "./SocialTable";
import ContactSection from "./ContactSection";

const FooterForm = ({ footer, onSave }) => {
  const [formData, setFormData] = useState({
    description: "",
    socials: [],
    contacts: {
      addresses: [],
      phones: [],
      emails: [],
    },
  });

  useEffect(() => {
    if (footer) {
      setFormData({
        description: footer.description || "",
        socials: footer.socials || [],
        contacts: {
          addresses: footer.contacts?.addresses || [],
          phones: footer.contacts?.phones || [],
          emails: footer.contacts?.emails || [],
        },
      });
    }
  }, [footer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="card shadow-sm border-0 mb-4">
        <div className="card-header bg-white">
          <h5 className="mb-0">Footer Description</h5>
        </div>

        <div className="card-body">
          <textarea
            rows="5"
            className="form-control"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />
        </div>
      </div>

      <SocialTable
        socials={formData.socials}
        setSocials={(socials) =>
          setFormData({
            ...formData,
            socials,
          })
        }
      />

      <ContactSection
        contacts={formData.contacts}
        setContacts={(contacts) =>
          setFormData({
            ...formData,
            contacts,
          })
        }
      />

      <div className="text-end mt-4">
        <button
          className="btn btn-primary px-4"
          type="submit"
        >
          Save Footer
        </button>
      </div>

    </form>
  );
};

export default FooterForm;