import { useAuthContext } from "../context/authContext";
import header from "../assets/profileHeader.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useArticleContext } from "../context/articlesContext";

const UserProfile = () => {
  const { user } = useAuthContext();
  const { articles } = useArticleContext();

  const [userArticles, setUserArticles] = useState<any[] | undefined>();

  useEffect(() => {
    setUserArticles(articles.filter((article) => article.authorId == user.id));
  }, []);

  return (
    <div className="px-[40px]">
      <div className="relative">
        <div className="w-full h-[200px]">
          <img
            className="w-full h-full object-cover"
            src={header}
            alt="header"
          />
        </div>
        <div className="absolute h-[200px] w-[200px] rounded-full bottom-[-100px] left-[50px] bg-[grey] grid place-items-center">
          H
        </div>
      </div>

      <div className="ml-[300px]">
        <h1 className="text-[2rem] font-bioRhyme font-semibold">
          Hello {user.name}!
        </h1>
        <h1 className="text-[1.2rem] font-bioRhyme">
          Here is a list of your {userArticles?.length} blog posts so far:
        </h1>
        <ul className="mt-[20px]">
          {userArticles?.map((article, index) => (
            <li
              key={index}
              className="mb-[10px] flex items-center gap-[20px] border-b-[2px] border-gray-500 pb-[5px]"
            >
              <img
                className="w-[50px] h-[30px] object-cover"
                src={article.img}
                alt="article_img"
              />
              <p className="flex-1 font-bold">{article.title}</p>
              <Link
                className="bg-black px-[15px] py-[5px] text-[0.8rem] text-white"
                to={`/articles/${article.id}`}
              >
                View
              </Link>
              <button className="bg-[red] px-[10px] py-[5px] text-[0.8rem] text-white">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
