import { ArticleType } from "../context/articlesContext";

type ArticlePropType = {
  article: ArticleType;
};

const Article = ({ article }: ArticlePropType) => {
  return (
    <div className="w-[300px] h-fit">
      <div className="h-[150px] w-full object-cover bg-blue-300">
        <img
          className="h-full w-full object-cover"
          src={article?.img}
          alt="article image"
        />
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
  );
};

export default Article;
