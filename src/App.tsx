import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Navbar from "./components/Navbar";
import WriteArticle from "./pages/WriteArticle";
import UserProfile from "./pages/UserProfile";
import ArticleDetail from "./pages/ArticleDetail";
import LoadingSpinner from "./components/LoadingSpinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/write" element={<WriteArticle />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>

      <ToastContainer autoClose={3000} />
      <LoadingSpinner />
    </div>
  );
}

export default App;
