import { useState, useEffect } from "react";
import { ArticleType, useArticleContext } from "../context/articlesContext";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { copyToClipboard } from "../utils/copyToClipboard";
import PagePreloader from "../components/PagePreloader";

const ArticleDetail = () => {
  const { id } = useParams();
  const { articles, fetchData } = useArticleContext();

  const [articleToView, setArticleToView] = useState<ArticleType | undefined>();

  useEffect(() => {
    const getArticle = async () => {
      if (articles.length > 0) {
        setArticleToView(articles.find((article) => article.id === id));
      } else {
        const unsubscribe = await fetchData();
        unsubscribe(); // This is important to clean up the snapshot listener
        setArticleToView(articles.find((article) => article.id === id));
      }
    };

    getArticle();
  }, [id, articles, fetchData]);

  const handleLinkCopy = async () => {
    const res = await copyToClipboard(window.location.href);
    if (res) {
      alert("Copied To Clipboard!");
    }
  };

  if (!articleToView) {
    return <PagePreloader />;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-[250px] md:h-[400px]">
        <img
          className="h-full w-full object-cover object-center"
          src={articleToView?.img}
          alt="article_img"
        />
      </div>
      <div className="mt-[20px] px-[20px] md:px-[80px] pb-[50px]">
        <div className="mb-[30px] flex flex-col xmd:flex-row gap-y-[10px] xmd:gap-y-[0px] justify-between ">
          <div>
            <h1 className="font-bioRhyme text-[2.5rem] font-bold leading-[1]">
              {articleToView?.title}
            </h1>
            <div className="mt-[20px] flex items-center gap-[10px]">
              <div className="flex items-center">
                <div className="h-[30px] w-[30px] rounded-full bg-[grey] mr-[5px]"></div>
                <p className="font-semibold text-[1.3rem] leading-none">
                  {articleToView?.author}
                </p>
              </div>
              |<p className="opacity-90 text-[0.8rem]">{articleToView?.time}</p>
            </div>
          </div>
          <button
            onClick={handleLinkCopy}
            className="self-end xmd:self-auto h-[50px] w-[150px] vsm:w-[180px] border-black border-[2px] px-[20px] py-[5px] text-[16px] vsm:text-[20px]"
          >
            COPY LINK
          </button>
        </div>

        {articleToView?.body && (
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: articleToView?.body }}
          ></div>
        )}
      </div>
    </motion.div>
  );
};

export default ArticleDetail;
