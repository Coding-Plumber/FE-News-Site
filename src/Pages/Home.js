import "./Home.css";
import "../Sidebar/Sidebar.css";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";

import ArticleCard from "../Components/ArticleCard";
import { getArticles } from "../Api/Api";


const Home = ({ articles, setArticles }) => {
  const fetchArticles = async () => {
    try {
      const response = await getArticles();
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [setArticles]);

  console.log(articles, 'articles in Home')
  if (articles.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-main__container">
      <div className="home-articles__container">
        {articles.map((article) => {
          return (
            <Link
              to={{
                pathname: `/article/${article.article_id}`,
                state: { article: article },
              }}
              key={article.article_id}
              className="article-link"
            >
              <ArticleCard key={article.article_id} article={article} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};



export default Home;
