import { useState, useEffect } from "react";
import { ArticleType } from "../context/articlesContext";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PagePreloader from "../components/PagePreloader";
import axios from "axios";

const ArticleDetail = () => {
  const { id } = useParams();

  const [articleToView, setArticleToView] = useState<ArticleType>();

  useEffect(() => {
    axios
      .get(`https://basit-blog-server.vercel.app/articles/${id}`)
      .then((res) => setArticleToView(res.data))
      .catch((err) => console.log(err));
  }, []);

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
      <div className="w-full h-[250px] md:h-[400px] bg-[tomato]">
        {articleToView?.image && (
          <img
            className="h-full w-full object-cover object-top"
            src={articleToView.image}
            alt="article_img"
          />
        )}
      </div>
      <div className="mt-[20px] px-[20px] md:px-[80px] pb-[50px]">
        <div className="mb-[30px] flex flex-col xmd:flex-row gap-y-[10px] xmd:gap-y-[0px] justify-between ">
          <div>
            <h1 className="font-bioRhyme text-[2.5rem] font-bold leading-[1]">
              {articleToView?.title}
            </h1>
            <div className="mt-[20px] flex items-center gap-[10px]">
              <div className="flex items-center">
                <p className="">{articleToView?.authorName}</p>
              </div>
              |
              <p className="opacity-90 text-[0.8rem]">
                {new Date(articleToView?.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
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
