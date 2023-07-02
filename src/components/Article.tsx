import { ArticleType } from "../context/articlesContext";
import { Link } from "react-router-dom";
import Preloader from "./Preloader";
import { useState } from "react";

type ArticlePropType = {
  article: ArticleType;
};

const Article = ({ article }: ArticlePropType) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Link to={`/articles/${article?.id}`}>
      <div className="w-full md:w-[300px] h-fit">
        <div className="relative h-[150px] w-full object-cover bg-blue-300">
          <img
            className="h-full w-full object-cover"
            src={article?.img}
            alt="article image"
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="bg-blue-300 absolute top-0 left-0 h-full w-full grid place-items-center">
              <Preloader />
            </div>
          )}
        </div>
        <div className="w-full py-[5px]">
          <h1 className="font-semibold text-[1.1rem] leading-[1.2]">
            {article?.title}
          </h1>
          <p className="mt-[5px] text-[0.8rem] mb-[10px]">{article?.desc}</p>
          <p className="font-semibold leading-none">{article?.author}</p>
          <p className="opacity-90 text-[0.8rem]">{article?.time}</p>
        </div>
      </div>
    </Link>
  );
};

export default Article;
