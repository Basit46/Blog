import Article from "../components/Article";
import { useArticleContext } from "../context/articlesContext";

const Articles = () => {
  const { articles } = useArticleContext();

  const links = ["View all", "Design", "Food", "Politics", "Sport", "Others"];
  return (
    <div className="w-full px-[40px] flex gap-[30px]">
      <div className="w-[10%] fixed top-[13vh]">
        {links.map((link, index) => (
          <div
            key={index}
            className="mb-[10px] border-[grey] border-l-2 block py-[5px] pl-[10px] text-[1.1rem] hover:font-bold hover:border-black cursor-pointer"
          >
            {link}
          </div>
        ))}
      </div>

      <div className="ml-[14%] flex-1 flex flex-wrap gap-[30px]">
        {articles &&
          articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
      </div>
    </div>
  );
};

export default Articles;
