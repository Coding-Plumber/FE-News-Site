import "./Home.css";
import "../Sidebar/Sidebar.css";
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";

import ArticleCard from "../Components/ArticleCard";
import { getArticles } from "../Api/Api";
import ArticlePage from "../Components/ArticlePage";

const Home = () => {

  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getArticles();
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, [setArticles]);

  const handleClick = (event) => {
    const findArticle = articles.find(
      (article) => article.article_id === event.article_id
    );
    const articleId = findArticle.article_id;

    if (findArticle) {
      navigate(`/article/${articleId}`, { state: {article: findArticle}});
    }

  };

  return (
    <div className="home-main__container">
      <div className="home-articles__container">
        {console.log(articles)}
        {articles.map((article) => {
          return (
            <ArticleCard
              key={article.article_id}
              articles={article}
              onClick={() => handleClick(article)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
