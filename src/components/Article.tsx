import { ArticleType } from "../context/articlesContext";
import { Link } from "react-router-dom";

const Article = ({ article }: { article: ArticleType }) => {
  return (
    <Link to={`/articles/${article?._id}`}>
      <div className="w-full md:w-[300px] h-fit">
        <div className="relative h-[150px] w-full object-cover bg-[tomato]">
          {article?.image && (
            <img
              className="h-full w-full object-cover"
              src={article?.image}
              alt="article image"
            />
          )}
        </div>
        <div className="w-full py-[5px]">
          <h1 className="mb-[10px] font-semibold text-[1.1rem] leading-[1.2]">
            {article?.title}
          </h1>

          <p className="mb-[4px] font-medium text-[0.8rem] leading-none">
            {article?.authorName}
          </p>
          <p className="text-[0.6rem]">
            {new Date(article?.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Article;
