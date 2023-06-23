import React, { createContext, useReducer, useContext, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";

const ArticleContext = createContext({} as ArticleContextType);

const initialState: ArticleType[] = [
  {
    id: 1,
    author: "Hassan Basit",
    authorId: "1nd73bdjs",
    body: "loreemmhs hdhdhhdhdhdh bdhhydhdydyd bhdydhdnhdd hhdhdhdh 123",
    category: "Food",
    img: "img1",
    time: "2023",
    title: "How To Cook",
    desc: "cook1",
  },
];

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
      return [...state, action.payload];
    default:
      return state;
  }
};

const ArticleContextProvider = ({ children }: ArticleContextProviderProp) => {
  const [articles, dispatch] = useReducer(reducer, initialState);

  console.log(articles);

  useEffect(() => {
    const fetchData = async () => {
      const colRef = collection(db, "articles");

      const unsubscribe = onSnapshot(colRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          dispatch({ type: "addArticle", payload: { ...doc.data() } });
          console.log(doc.data());
        });
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
