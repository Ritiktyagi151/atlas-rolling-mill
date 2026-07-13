import { Routes, Route } from "react-router-dom";
import Dynamic_BlogList from "../../components/Blog/Dynamic_BlogList";
import Dynamic_BlogDetail from "../../components/Blog/Dynamic_BlogDetail";

const BlogPage = () => {
  return (
    <Routes>
      <Route index element={<Dynamic_BlogList />} />
      <Route path=":slug" element={<Dynamic_BlogDetail />} />
    </Routes>
  );
};

export default BlogPage;