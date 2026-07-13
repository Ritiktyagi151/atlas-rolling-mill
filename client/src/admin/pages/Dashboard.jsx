const Dashboard = () => {
  const cards = [
    "Products",
    "Categories",
    "Blogs",
    "Navbar",
    "Events",
    "Contact",
    "Footer",
    "Enquiries",
  ];

  return (
    <>
      <div className="mb-4">
        <h2 className="fw-bold">Dashboard</h2>
        <p className="text-muted">
          Welcome to Atlas Rolling Mill Admin Panel
        </p>
      </div>

      <div className="row g-4">
        {cards.map((card) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={card}>
            <div className="admin-card h-100">
              <h5>{card}</h5>
              <p>Manage {card}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;