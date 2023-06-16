import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Navbar from "./components/Navbar";
import WriteArticle from "./pages/WriteArticle";
import UserProfile from "./pages/UserProfile";
import ArticleDetail from "./pages/ArticleDetail";

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
    </div>
  );
}

export default App;
