import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ArticlePreview from "./components/ArticlePreview";
import * as serviceWorker from "./serviceWorker";

const API_KEY_CURRENTAPI = "Ew8p_qJfel4eZvUsz5ATpYnbmy9SLYLlo4kc1d33_N9g3jVc";
const BASEURL_CURRENTAPI = "https://api.currentsapi.services";

const ListArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch(
      `${BASEURL_CURRENTAPI}/v1/latest-news?apiKey=${API_KEY_CURRENTAPI}`
    )
      .then((response) => response.json())
      .then(({ news }) => {
        setArticles(news);
      })
      .catch((error) => console.log(`Error Fetch CurrentApi; ${error}`));
  };

  return (
    <>
      {articles.map(
        ({ id, author, published, description, title, url, image }) => (
          <ArticlePreview
            {...{ id, author, published, description, title, url, image }}
          />
        )
      )}
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ListArticles />
  </React.StrictMode>,
  document.getElementById("article-preview-react")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
