const BlogTable = ({
  blogs,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="card shadow-sm border-0">
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th width="90">Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Author</th>
              <th>Date</th>
              <th width="180">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-4"
                >
                  No Blogs Found
                </td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>
                    <img
  src={
    blog.image.url.startsWith("/uploads")
      ? `${import.meta.env.VITE_API_URL}${blog.image.url}`
      : blog.image.url
  }
  alt={blog.title}
  width="70"
  height="50"
  className="rounded object-fit-cover"
/>
                  </td>

                  <td>{blog.title}</td>

                  <td>{blog.category}</td>

                  <td>{blog.author}</td>

                  <td>{blog.date}</td>

                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() =>
                        onEdit(blog)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() =>
                        onDelete(blog._id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogTable;