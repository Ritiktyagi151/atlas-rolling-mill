import React from "react";

const AnnouncementSection = ({ announcements, setAnnouncements }) => {
  const handleChange = (index, value) => {
    const updated = [...announcements];
    updated[index].text = value;

    setAnnouncements(updated);
  };

  const addAnnouncement = () => {
    setAnnouncements([
      ...announcements,
      {
        text: "",
        order: announcements.length + 1,
      },
    ]);
  };

  const removeAnnouncement = (index) => {
    const updated = announcements
      .filter((_, i) => i !== index)
      .map((item, i) => ({
        ...item,
        order: i + 1,
      }));

    setAnnouncements(updated);
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Announcement Bar</h5>

        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={addAnnouncement}
        >
          + Add Announcement
        </button>
      </div>

      <div className="card-body">
        {announcements.map((announcement, index) => (
          <div className="row mb-3" key={index}>
            <div className="col-md-11">
              <input
                type="text"
                className="form-control"
                value={announcement.text}
                onChange={(e) =>
                  handleChange(index, e.target.value)
                }
              />
            </div>

            <div className="col-md-1">
              <button
                type="button"
                className="btn btn-danger w-100"
                onClick={() => removeAnnouncement(index)}
              >
                ×
              </button>
            </div>
          </div>
        ))}

        {announcements.length === 0 && (
          <p className="text-muted mb-0">
            No announcements added.
          </p>
        )}
      </div>
    </div>
  );
};

export default AnnouncementSection;