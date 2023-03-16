import "./ArticlePage.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ArticleVotes from "./Voting/ArticleVotes";

import { randomFiveArticles } from "../utilities/utils";
import RandomArticles from "../CustomHooks/RandomArticles";
import useFetchArticleData from "../CustomHooks/useFetchArticleData";
import CommentsContainer from "./CommentsContainer";
import NewArticleComment from '../Components/NewArticleComment';

const ArticlePage = ({ articles, setArticles }) => {
  const { id } = useParams();
  const { article } = useFetchArticleData(
    id,
    articles,
    setArticles
  );

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-page-main__container">
      <div className="article-page-image__container">
        <img src={article.article_img_url} alt="article image" />

        <RandomArticles
          articles={articles}
          randomFiveArticles={randomFiveArticles}
        />
      </div>
      <div className="article-page-body__container">
        <div className="article-page-date-author__container">
          <div>posted by {article.author}</div>
          <div>{article.created_at.substring(0, 10)}</div>
        </div>
        <div className="article-page-article-description__container">
          <p className="article-page-body__text">{article.body}</p>
        </div>

        <ArticleVotes article={article} articleId={id} />
        <NewArticleComment />
        <CommentsContainer id={id} />
      </div>
    </div>
  );
};

export default ArticlePage;
