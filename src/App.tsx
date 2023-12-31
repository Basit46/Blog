import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Navbar from "./components/Navbar";
import WriteArticle from "./pages/WriteArticle";
import UserProfile from "./pages/UserProfile";
import ArticleDetail from "./pages/ArticleDetail";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import LoadingSpinner from "./components/LoadingSpinner";

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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <LoadingSpinner />
    </div>
  );
}

export default App;
