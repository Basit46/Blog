import { useState, useEffect } from "react";
import { ArticleType, useArticleContext } from "../context/articlesContext";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  const { id } = useParams();
  const { articles } = useArticleContext();

  const [articleToView, setArticleToView] = useState<ArticleType | undefined>();

  useEffect(() => {
    if (id) {
      setArticleToView(articles?.find((article) => article.id === id));
    }
  }, []);

  return (
    <div>
      <div className="w-full h-[250px] md:h-[400px]">
        <img
          className="h-full w-full object-cover object-center"
          src={articleToView?.img}
          alt="article_img"
        />
      </div>
      <div className="mt-[20px] px-[20px] md:px-[80px] pb-[50px]">
        <h1 className="font-bioRhyme text-[2.5rem] font-bold leading-[1]">
          {articleToView?.title}
        </h1>
        <div className="mt-[20px] mb-[30px] flex items-center gap-[10px]">
          <div className="flex items-center">
            <div className="h-[30px] w-[30px] rounded-full bg-[grey] mr-[5px]"></div>
            <p className="font-semibold text-[1.3rem] leading-none">
              {articleToView?.author}
            </p>
          </div>
          |<p className="opacity-90 text-[0.8rem]">{articleToView?.time}</p>
        </div>
        {articleToView?.body && (
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: articleToView?.body }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;
