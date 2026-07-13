const ContactSection = ({ contacts, setContacts }) => {
  const handleArrayChange = (field, index, value) => {
    const updated = [...contacts[field]];
    updated[index] = value;

    setContacts({
      ...contacts,
      [field]: updated,
    });
  };

  const addField = (field) => {
    setContacts({
      ...contacts,
      [field]: [...contacts[field], ""],
    });
  };

  const removeField = (field, index) => {
    setContacts({
      ...contacts,
      [field]: contacts[field].filter((_, i) => i !== index),
    });
  };

  const renderSection = (title, field, placeholder) => (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header bg-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{title}</h5>

        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={() => addField(field)}
        >
          + Add
        </button>
      </div>

      <div className="card-body">
        {contacts[field].length === 0 && (
          <p className="text-muted mb-0">No {title.toLowerCase()} added.</p>
        )}

        {contacts[field].map((item, index) => (
          <div
            className="d-flex gap-2 mb-3"
            key={index}
          >
            <input
              type="text"
              className="form-control"
              placeholder={placeholder}
              value={item}
              onChange={(e) =>
                handleArrayChange(
                  field,
                  index,
                  e.target.value
                )
              }
            />

            <button
              type="button"
              className="btn btn-danger"
              onClick={() =>
                removeField(field, index)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {renderSection(
        "Addresses",
        "addresses",
        "Enter Address"
      )}

      {renderSection(
        "Phone Numbers",
        "phones",
        "Enter Phone Number"
      )}

      {renderSection(
        "Emails",
        "emails",
        "Enter Email"
      )}
    </>
  );
};

export default ContactSection;