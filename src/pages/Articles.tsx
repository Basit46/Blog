import { useState, useEffect } from "react";
import Article from "../components/Article";
import { ArticleType, useArticleContext } from "../context/articlesContext";
import Preloader from "../components/Preloader";

const categories = [
  "View all",
  "Design",
  "Food",
  "Politics",
  "Sport",
  "Others",
];

const Articles = () => {
  const { articles } = useArticleContext();

  const [selectedCateg, setSelectedCateg] = useState("View all");
  const [articlesToRender, setArticlesToRender] = useState<ArticleType[]>();

  useEffect(() => {
    setArticlesToRender(articles);
  }, [articles]);

  useEffect(() => {
    if (selectedCateg == "View all") {
      setArticlesToRender(articles);
      return;
    }

    setArticlesToRender(
      articles.filter((article) => article.category === selectedCateg)
    );
  }, [selectedCateg]);

  return (
    <div className="w-full px-[40px] flex gap-[30px]">
      <div className="w-[10%] fixed top-[13vh]">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => setSelectedCateg(category)}
            className={`${
              selectedCateg === category && "bg-black text-white"
            } mb-[10px] block  px-[15px] py-[5px] text-[1.1rem] cursor-pointer`}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="ml-[14%] flex-1 flex flex-wrap gap-[30px]">
        {articles.length < 1 && (
          <h1 className="font-bold text-[2rem]">Loading...</h1>
        )}

        {articlesToRender &&
          articlesToRender.map((article, index) => (
            <Article key={index} article={article} />
          ))}
      </div>
    </div>
  );
};

export default Articles;
