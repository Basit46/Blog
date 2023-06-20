import React, { createContext, useReducer, useContext } from "react";

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
  },
];

type ArticleContextProviderProp = {
  children: React.ReactNode;
};

type ArticleType = {
  id: number;
  author: string;
  authorId: string;
  body: string;
  category: string;
  img: string;
  time: string;
  title: string;
};

type ActionType = {
  type: "add";
  payload: ArticleType;
};

type ArticleContextType = {
  articles: ArticleType[];
  dispatch: React.Dispatch<ActionType>;
};

const reducer = (state: ArticleType[], action: ActionType) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};

const ArticleContextProvider = ({ children }: ArticleContextProviderProp) => {
  const [articles, dispatch] = useReducer(reducer, initialState);

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
