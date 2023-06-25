import React, { createContext, useReducer, useContext, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";

const ArticleContext = createContext({} as ArticleContextType);

const initialState: ArticleType[] = [];

type ArticleContextProviderProp = {
  children: React.ReactNode;
};

export type ArticleType = {
  id: number;
  author: string;
  authorId: string;
  body: string;
  category: string;
  img: string;
  time: string;
  title: string;
  desc: string;
};

type ActionType = {
  type: "addArticle";
  payload: any;
};

type ArticleContextType = {
  articles: ArticleType[];
  dispatch: React.Dispatch<ActionType>;
};

const reducer = (state: ArticleType[], action: ActionType) => {
  switch (action.type) {
    case "addArticle":
      return [...action.payload];

    default:
      return state;
  }
};

const ArticleContextProvider = ({ children }: ArticleContextProviderProp) => {
  const [articles, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const colRef = collection(db, "articles");

      const unsubscribe = onSnapshot(colRef, (snapshot) => {
        let resData: any[] = [];
        snapshot.docs.forEach((doc) => {
          resData.push({ ...doc.data() });
        });
        dispatch({ type: "addArticle", payload: resData });
      });

      return () => unsubscribe();
    };

    fetchData();
  }, []);

  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;

export const useArticleContext = () => {
  return useContext(ArticleContext);
};
