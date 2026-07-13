const AddressSection = ({
  addresses,
  setAddresses,
}) => {
  const handleChange = (
    index,
    field,
    value
  ) => {
    const updated = [...addresses];
    updated[index][field] = value;

    setAddresses(updated);
  };

  const addAddress = () => {
    setAddresses([
      ...addresses,
      {
        title: "",
        address: "",
      },
    ]);
  };

  const removeAddress = (index) => {
    setAddresses(
      addresses.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-header bg-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Addresses</h5>

        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={addAddress}
        >
          + Add Address
        </button>
      </div>

      <div className="card-body">
        {addresses.map((address, index) => (
          <div
            className="border rounded p-3 mb-3"
            key={index}
          >
            <input
              className="form-control mb-3"
              placeholder="Address Title"
              value={address.title}
              onChange={(e) =>
                handleChange(
                  index,
                  "title",
                  e.target.value
                )
              }
            />

            <textarea
              rows="3"
              className="form-control mb-3"
              placeholder="Address"
              value={address.address}
              onChange={(e) =>
                handleChange(
                  index,
                  "address",
                  e.target.value
                )
              }
            />

            <button
              type="button"
              className="btn btn-danger"
              onClick={() =>
                removeAddress(index)
              }
            >
              Delete
            </button>
          </div>
        ))}

        {addresses.length === 0 && (
          <p className="text-muted mb-0">
            No addresses added.
          </p>
        )}
      </div>
    </div>
  );
};

export default AddressSection;