const SocialTable = ({ socials, setSocials }) => {
  const handleChange = (index, field, value) => {
    const updated = [...socials];
    updated[index][field] = value;
    setSocials(updated);
  };

  const addSocial = () => {
    setSocials([
      ...socials,
      {
        name: "",
        icon: "",
        link: "",
      },
    ]);
  };

  const removeSocial = (index) => {
    const updated = socials.filter((_, i) => i !== index);
    setSocials(updated);
  };

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header bg-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Social Media</h5>

        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={addSocial}
        >
          + Add Social
        </button>
      </div>

      <div className="card-body">

        {socials.length === 0 && (
          <p className="text-muted mb-0">
            No social media links added.
          </p>
        )}

        {socials.map((social, index) => (
          <div
            key={index}
            className="border rounded p-3 mb-3"
          >
            <div className="row g-3">

              <div className="col-md-4">
                <label className="form-label">
                  Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={social.name}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "name",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="col-md-3">
                <label className="form-label">
                  Icon
                </label>

              <select
  className="form-select"
  value={social.icon}
  onChange={(e) =>
    handleChange(index, "icon", e.target.value)
  }
>
  <option value="">Select Icon</option>

  <option value="FaLinkedin">LinkedIn</option>
  <option value="FaFacebook">Facebook</option>
  <option value="FaInstagram">Instagram</option>
  <option value="FaYoutube">YouTube</option>
  <option value="FaXTwitter">X (Twitter)</option>
  <option value="FaWhatsapp">WhatsApp</option>
  <option value="FaTelegram">Telegram</option>
  <option value="FaPinterest">Pinterest</option>
  <option value="FaDiscord">Discord</option>
</select>
              </div>

              <div className="col-md-4">
                <label className="form-label">
                  Link
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={social.link}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "link",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="col-md-1 d-flex align-items-end">
                <button
                  type="button"
                  className="btn btn-danger w-100"
                  onClick={() =>
                    removeSocial(index)
                  }
                >
                  ×
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default SocialTable;