import React, { useState, useEffect } from "react";
import { getArticles } from "../Api/Api";


const RandomArticles = ({ articles, randomFiveArticles }) => {
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    try {
      const response = await getArticles();
      setArticleList(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (articles.length === 0) {
      fetchArticles();
    } else {
      setArticleList(articles);
      setLoading(false);
    }
  }, [articles]);

  const randomArticles =
    articleList.length !== 0 ? randomFiveArticles(articleList) : [];

  return (
    <div className="article-page-article-list__container">
      <p className="article-page-articles-title">Articles</p>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="article-page-list-of-articles">
          {randomArticles.map((article) => (
            <a href={`/article/${article.article_id}`} key={article.article_id}>
              <li className="article-page-article-list">{article.title}</li>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default RandomArticles;
