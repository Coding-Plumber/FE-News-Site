import "./ArticlePage.css";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  getArticleCommentsById,
  patchArticleVote,
} from "../Api/Api";
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import thumbsDown from "../Assets/thumbs-down-outline.svg";
import thumbsUp from "../Assets/thumbs-up-outline.svg";

const ArticlePage = () => {
  const { id } = useParams();

  const [articleComments, setArticleComments] = useState([]);

  const [article, setArticle] = useState(null);

  // fetches articles if none have been passed through state or props using the id from params to obtain correct article

  useEffect(
    () => {
      if (!article) {
        const fetchArticles = async () => {
          try {
            const response = await getArticleById(id);
            setArticle(response.data.articleById);
          } catch (error) {
            console.log(error);
          }
        };
        fetchArticles();
      }
    },
    [id],
    [article]
  );

  useEffect(() => {
    if (article) {
      const fetchComments = async () => {
        try {
          const response = await getArticleCommentsById(id);
          setArticleComments(response.data.articleComments);
        } catch (error) {
          console.log(error);
        }
      };
      fetchComments();
    }
  }, [id, article]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const handleUpVote = (event) => {
    const value = event.target.dataset.value;
    console.log(value);
  };

  return (
    <div className="article-page-main__container">
      <div className="article-page-image__container">
        <img src={article.article_img_url} alt="article image" />
      </div>
      <div className="article-page-body__container">
        <div className="article-page-date-author__container">
          <div>posted by {article.author}</div>
          <div>{article.created_at.substring(0, 10)}</div>
        </div>
        <div className="article-page-article-description__container">
          <p className="article-page-body__text">{article.body}</p>
        </div>
        <div className="vote-count-vote-icons__container">
          <p className="article-page-vote-counter">Votes: {article.votes}</p>
          <div className="thumbs-voting-icons__container">
            <img
              className="thumbs-up-icon"
              src={thumbsUp}
              data-value="+1"
              onClick={handleUpVote}
            />
            <img className="thumbs-down-icon" src={thumbsDown} />
          </div>
        </div>
        <div className="article-page__comments">
          {articleComments.map((comment) => {
            return <Comment key={comment.comment_id} comment={comment} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
