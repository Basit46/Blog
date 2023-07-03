import { useState, useEffect } from "react";
import Article from "../components/Article";
import { ArticleType, useArticleContext } from "../context/articlesContext";

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
    <div className="mt-[30px] md:mt-0 w-full px-[20px] md:px-[40px] flex flex-col md:flex-row gap-[30px]">
      <div className="w-full md:w-[10%] md:fixed top-[13vh] flex flex-wrap gap-[10px]  md:block pb-[10px] border-[red] border-b-[2px] md:border-trnasparent md:border-b-[0]">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => setSelectedCateg(category)}
            className={`${
              selectedCateg === category && "bg-black text-white"
            } border-black border-[2px] md:mb-[10px] inline md:block  px-[15px] py-[5px] text-[1.1rem] cursor-pointer`}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="ml-0 md:ml-[14%] md:flex-1 flex flex-col md:flex-row md:flex-wrap gap-[30px]">
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
