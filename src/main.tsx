import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import AuthContextProvider from "./context/authContext.tsx";
import ArticleContextProvider from "./context/articlesContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <AuthContextProvider>
      <ArticleContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ArticleContextProvider>
    </AuthContextProvider>
  </HashRouter>
);
