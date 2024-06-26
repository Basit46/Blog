import { useAuthContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useArticleContext } from "../context/articlesContext";
import profileImg from "../assets/profile.jpg";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const UserProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { articles, fetchData } = useArticleContext();

  const [userArticles, setUserArticles] = useState<any[] | undefined>();

  useEffect(() => {
    if (user.id === null) {
      navigate("/articles");
      return;
    }
  }, [user]);

  useEffect(() => {
    setUserArticles(articles.filter((article) => article.authorId == user.id));
  }, [user, articles]);

  const handleDel = (id: string) => {
    axios
      .delete(`https://basit-blog-server.vercel.app/articles/${id}`)
      .then(async () => {
        await fetchData();
        toast("Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="px-[20px] md:px-[40px] h-fit lg:h-[84vh] w-full flex flex-col lg:flex-row gap-[30px] lg:gap-[80px]"
    >
      <div className="h-[170px] lg:h-[97%] w-full md:w-[30%] bg-black">
        <img
          className="h-full w-full object-cover"
          src={profileImg}
          alt="profile_Img"
        />
      </div>

      <div className="lg:flex-1 lg:mt-[40px]">
        <h1 className="text-[2rem] font-bioRhyme font-semibold">
          Hello {user.name}!
        </h1>
        {userArticles && userArticles?.length < 1 ? (
          <h1 className="text-[1.2rem] font-bioRhyme">
            You have <span className="text-red-600">zero blog articles</span>.
            You can start{" "}
            <Link to="/write" className="text-blue-600 underline">
              writing
            </Link>{" "}
            now
          </h1>
        ) : (
          <h1 className="text-[1.2rem] font-bioRhyme">
            Here is a list of your {userArticles?.length} article(s) so far:
          </h1>
        )}

        <ul className="mt-[20px]">
          {userArticles?.map((article, index) => (
            <li
              key={index}
              className="mb-[10px] flex items-center gap-[20px] border-b-[2px] border-gray-500 pb-[5px]"
            >
              <img
                className="w-[50px] h-[30px] object-cover"
                src={article.image}
                alt="article_img"
              />
              <p className="flex-1 font-bold">{article.title}</p>
              <Link
                className="bg-black px-[15px] py-[5px] text-[0.8rem] text-white"
                to={`/articles/${article._id}`}
              >
                View
              </Link>
              <button
                onClick={() => handleDel(article._id)}
                className="bg-[red] px-[10px] py-[5px] text-[0.8rem] text-white"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default UserProfile;
