import "./ArticlePage.css";
import { useParams } from "react-router-dom";
import React, { useState } from "react";

import arrowDown from "../Assets/arrow-down.svg";
import arrowUp from "../Assets/arrow-up.svg";
import { randomFiveArticles } from "../utilities/utils";
import RandomArticles from "../CustomHooks/RandomArticles";
import useFetchArticleData from "../CustomHooks/useFetchArticleData";
import CommentsContainer from "./CommentsContainer";

const ArticlePage = ({ articles, setArticles }) => {
  const { id } = useParams();
  const { article, articleComments, loading } = useFetchArticleData(
    id,
    articles,
    setArticles
  );

  console.log(articleComments, "article comments in ARticlePage");

  // const [votes, setVotes] = useState(0);

  if (!article) {
    return <div>Loading...</div>;
  }

  const handleUpVote = (event) => {
    // const value = event.target.dataset.value;
    // setVotes(votes + parseInt(value));
    //   console.log(votes);
    // Update the article depending on which vote is pressed.
    // increase or decrease by 1 and not allow more than one vote to be done
    // Have to get the value from the button press and then send it to the database to be updated
    // need to make it optimisticly rendered so the count will change even before
    // the update has taken place but will be reverted if fails.
  };

  // comments into parents

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
        <div className="vote-count-vote-icons__container">
          <p className="article-page-vote-counter">Votes: 0</p>
          <div className="arrow-voting-icons__container">
            <img
              className="arrow-up-icon"
              src={arrowUp}
              data-value="+1"
              onClick={handleUpVote}
            />
            <img
              className="arrow-down-icon"
              src={arrowDown}
              data-value="-1"
              onClick={handleUpVote}
            />
          </div>
        </div>
        <CommentsContainer
          articleComments={articleComments}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ArticlePage;
