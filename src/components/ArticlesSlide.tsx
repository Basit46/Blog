import { ArticleType } from "../context/articlesContext";

type ArticlesSlideProp = {
  article: ArticleType;
};

const ArticlesSlide = ({ article }: ArticlesSlideProp) => {
  return (
    <div className="h-full w-[500px]">
      <img className="w-full h-full object-cover" src={article.img} alt="img" />
    </div>
  );
};

export default ArticlesSlide;
