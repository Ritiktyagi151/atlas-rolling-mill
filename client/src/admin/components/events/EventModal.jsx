import { useEffect, useState } from "react";

const EventModal = ({ show, onClose, onSubmit, event }) => {
  const [image, setImage] = useState(null);
  const [order, setOrder] = useState(0);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (event) {
      setOrder(event.order);
      setPreview(`http://localhost:5000${event.image}`);
    } else {
      setOrder(0);
      setPreview("");
    }

    setImage(null);
  }, [event]);

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("order", order);

    if (image) {
      formData.append("image", image);
    }

    onSubmit(formData);
  };

  return (
    <div
      className="modal fade show d-block"
      style={{ background: "rgba(0,0,0,.5)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              {event ? "Update Event" : "Upload Event"}
            </h5>

            <button
              className="btn-close"
              onClick={onClose}
            />
          </div>

          <form onSubmit={handleSubmit}>

            <div className="modal-body">

              {preview && (
                <div className="mb-4 text-center">
                  <img
                    src={preview}
                    alt=""
                    className="img-fluid rounded"
                    style={{
                      maxHeight: "300px",
                    }}
                  />
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">
                  Image
                </label>

                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={(e) => {
                    setImage(e.target.files[0]);

                    setPreview(
                      URL.createObjectURL(e.target.files[0])
                    );
                  }}
                  required={!event}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Display Order
                </label>

                <input
                  type="number"
                  className="form-control"
                  value={order}
                  onChange={(e) =>
                    setOrder(e.target.value)
                  }
                />
              </div>

            </div>

            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary"
              >
                {event ? "Update" : "Upload"}
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default EventModal;