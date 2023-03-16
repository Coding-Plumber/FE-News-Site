import "./Home.css";
import "../Sidebar/Sidebar.css";
import { useNavigate, Link } from "react-router-dom";

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



  return (
    <div className="home-main__container">
      <div className="home-articles__container">
        {console.log(articles)}
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
              <ArticleCard key={article.article_id} articles={article} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
