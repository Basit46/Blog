import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ArticleContext = createContext({} as ArticleContextType);

export type ArticleType = {
  _id: string;
  title: string;
  body: string;
  category: string;
  image: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type ArticleContextType = {
  articles: ArticleType[];
  openLoader: boolean;
  setOpenLoader: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: () => Promise<void>;
};

const ArticleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openLoader, setOpenLoader] = useState(false);
  const [articles, setArticles] = useState<ArticleType[]>([]);

  const fetchData = async () => {
    axios
      .get("http://localhost:5000/articles")
      .then((res) => setArticles(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ArticleContext.Provider
      value={{ articles, openLoader, setOpenLoader, fetchData }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;

export const useArticleContext = () => {
  return useContext(ArticleContext);
};
