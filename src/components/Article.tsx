import articeImg from "../assets/pexels-ulrick-trappschuh-16249246.jpg";
import { ArticleType } from "../context/articlesContext";

type ArticlePropType = {
  article: ArticleType;
};

const Article = ({ article }: ArticlePropType) => {
  return (
    <div className="w-[300px] h-fit">
      <div className="h-[50%] w-full">
        <img
          className="h-full w-full object-cover"
          src={articeImg}
          alt="article image"
        />
      </div>
      <div className="w-full py-[5px]">
        <h1 className="font-semibold text-[1.1rem] leading-[1.2]">
          {article.title}
        </h1>
        <p className="mt-[5px] text-[0.8rem] mb-[10px]">
          {article.body.slice(0, 10)}
        </p>
        <p className="font-semibold leading-none">{article.author}</p>
        <p className="opacity-90 text-[0.8rem]">{article.time}</p>
      </div>
    </div>
  );
};

export default Article;
