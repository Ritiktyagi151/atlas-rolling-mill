import { useEffect, useState } from "react";
import {
  getEnquiries,
  deleteEnquiry,
} from "../services/contactService";

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);

  const fetchEnquiries = async () => {
    try {
      const res = await getEnquiries();
      setEnquiries(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this enquiry?")) return;

    try {
      await deleteEnquiry(id);
      fetchEnquiries();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="mb-4">
        <h2 className="fw-bold">Enquiries</h2>
      </div>

      <div className="card shadow-sm border-0">
        <div className="table-responsive">
          <table className="table table-bordered table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Inquiry Type</th>
                <th>Message</th>
                <th>Date</th>
                <th width="90">Action</th>
              </tr>
            </thead>

            <tbody>
              {enquiries.map((item) => (
                <tr key={item._id}>
                  <td>{item.fullName}</td>
                  <td>{item.country}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.inquiryType}</td>
                  <td style={{ maxWidth: "300px" }}>
                    {item.message}
                  </td>
                  <td>
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        handleDelete(item._id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {enquiries.length === 0 && (
                <tr>
                  <td
                    colSpan="8"
                    className="text-center py-4"
                  >
                    No enquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Enquiries;