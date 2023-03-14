import "./ArticlePage.css";
import { useParams, useLocation } from "react-router-dom";
import { getArticleById } from "../Api/Api";
import React, { useEffect, useState } from "react";

const ArticlePage = (props) => {
  const { id } = useParams();
  const { state } = useLocation();
  const [article, setArticle] = useState(
    state?.article || props.article || null
  );
  const [articleComments, setArticleComments] = useState([]);
  const date = article.created_at.substring(0, 10);

  useEffect(() => {
    if (!article) {
      const fetchArticles = async () => {
        try {
          const response = await getArticleById(id);
          setArticle(response.data.articles);
        } catch (error) {
          console.log(error);
        }
      };
      fetchArticles();
    }
  }, [id, article]);

  console.log(article, "<-- article within Article Page");

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-page-main__container">
      <div className="article-page-image__container">
        <img src={article.article_img_url} alt="article image" />
      </div>
      <div className="article-page-body__container">
        <div className="article-page-date-author__container">
          <div>posted by {article.author}</div>
          <div>{date}</div>
        </div>
        <div className="article-page-article-description__container">
          <p className="article-page-body__text">{article.body}</p>
        </div>
        <div className="article-page__comments">
            COMMENTS HERE
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
