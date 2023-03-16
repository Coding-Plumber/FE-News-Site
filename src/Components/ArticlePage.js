import "./ArticlePage.css";
import { useParams } from "react-router-dom";

import Comment from "./Comment";
import thumbsDown from "../Assets/thumbs-down-outline.svg";
import thumbsUp from "../Assets/thumbs-up-outline.svg";
import { randomFiveArticles } from "../utilities/utils";
import RandomArticles from "../CustomHooks/RandomArticles";
import useFetchArticleData from "../CustomHooks/useFetchArticleData";

const ArticlePage = ({ articles, setArticles }) => {
  const { id } = useParams();
  const { article, articleComments } = useFetchArticleData(
    id,
    articles,
    setArticles
  );

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
