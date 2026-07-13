const EventCard = ({ event, onEdit, onDelete }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card shadow-sm border-0 h-100">

        <img
          src={`http://localhost:5000${event.image}`}
          alt="Event"
          className="card-img-top"
          style={{
            height: "250px",
            objectFit: "cover",
          }}
        />

        <div className="card-body">

          <h6 className="mb-2">
            Display Order : {event.order}
          </h6>

          <span
            className={`badge ${
              event.isActive
                ? "bg-success"
                : "bg-danger"
            }`}
          >
            {event.isActive ? "Active" : "Inactive"}
          </span>

        </div>

        <div className="card-footer bg-white border-0 d-flex gap-2">

          <button
            className="btn btn-warning flex-fill"
            onClick={() => onEdit(event)}
          >
            Edit
          </button>

          <button
            className="btn btn-danger flex-fill"
            onClick={() => {
              if (
                window.confirm(
                  "Delete this event image?"
                )
              ) {
                onDelete(event._id);
              }
            }}
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default EventCard;