import { ArticleType } from "../context/articlesContext";
import { Link } from "react-router-dom";

const Article = ({ article }: { article: ArticleType }) => {
  return (
    <Link to={`/articles/${article?._id}`}>
      <div className="w-full md:w-[300px] h-fit">
        <div className="relative h-[150px] w-full object-cover bg-blue-300">
          <img
            className="h-full w-full object-cover"
            src={article?.image}
            alt="article image"
          />
        </div>
        <div className="w-full py-[5px]">
          <h1 className="font-semibold text-[1.1rem] leading-[1.2]">
            {article?.title}
          </h1>
          <p className="mt-[5px] text-[0.8rem] mb-[10px]">{article?.body}</p>
          <p className="font-semibold leading-none">{article?.authorName}</p>
          <p className="opacity-90 text-[0.8rem]">{article?.createdAt}</p>
        </div>
      </div>
    </Link>
  );
};

export default Article;
