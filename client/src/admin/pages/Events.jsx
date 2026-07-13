import { useEffect, useState } from "react";
import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from "../services/eventService";
import EventCard from "../components/events/EventCard";
import EventModal from "../components/events/EventModal";
import "../styles/events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      setLoading(true);

      const res = await getEvents();

      setEvents(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch events.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleCreate = () => {
    setSelectedEvent(null);
    setShowModal(true);
  };

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);

      alert("Event deleted successfully.");

      fetchEvents();
    } catch (error) {
      console.error(error);
      alert("Failed to delete event.");
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (selectedEvent) {
        await updateEvent(selectedEvent._id, formData);

        alert("Event updated successfully.");
      } else {
        await createEvent(formData);

        alert("Event uploaded successfully.");
      }

      setShowModal(false);
      fetchEvents();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="events-page">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold mb-1">Events</h2>
          <p className="text-muted mb-0">
            Manage gallery images
          </p>
        </div>

        <button
          className="btn btn-primary"
          onClick={handleCreate}
        >
          + Upload Image
        </button>

      </div>

      {loading ? (
        <div className="text-center py-5">
          Loading...
        </div>
      ) : (
        <div className="row g-4">

          {events.length === 0 ? (
            <div className="col-12 text-center py-5">
              <h5>No event images found.</h5>
            </div>
          ) : (
            events.map((event) => (
              <EventCard
                key={event._id}
                event={event}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}

        </div>
      )}

      <EventModal
        show={showModal}
        event={selectedEvent}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
      />

    </div>
  );
};

export default Events;