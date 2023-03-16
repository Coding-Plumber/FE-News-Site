import { patchArticleVote } from "../../Api/Api";
import { useState, useEffect } from "react";
import arrowDown from "../../Assets/arrow-down.svg";
import arrowUp from "../../Assets/arrow-up.svg";
import arrowDownOrange from "../../Assets/arrow-down-orange.svg";
import arrowUpOrange from "../../Assets/arrow-up-orange.svg";

const ArticleVotes = ({ article, articleId }) => {
  const [votes, setVotes] = useState(article.votes);
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);

  const patchVote = async (value) => {
    try {
      const response = await patchArticleVote(articleId, value);
    } catch (error) {
      console.log(error);
      setVotes(votes + value);
    }
  };

  const handleArticleVote = (event) => {
    const voteType = event.target.getAttribute("value");

    if (voteType === "up-vote") {
      if (hasUpVoted) {
        setVotes(votes - 1);
        patchVote(-1);
      } else if (!hasUpVoted && !hasDownVoted) {
        setVotes(votes + 1);
        patchVote(1);
      } else if (!hasUpVoted && hasDownVoted) {
        setVotes(votes + 2);
        patchVote(2);
      }
      // Toggle the upvote state and reset the downvote state
      setHasUpVoted((prev) => !prev);

      setHasDownVoted(false);
    } else if (voteType === "down-vote") {
      if (hasDownVoted) {
        setVotes(votes + 1);
        patchVote(1);
      } else if (!hasDownVoted && !hasUpVoted) {
        setVotes(votes - 1);
        patchVote(-1);
      } else if (!hasDownVoted && hasUpVoted) {
        setVotes(votes - 2);
        patchVote(-2);
      }
      setHasDownVoted((prev) => !prev);
      setHasUpVoted(false);
    }
  };

  return (
    <div className="vote-count-vote-icons__container">
      <p className="article-page-vote-counter">Votes: {votes}</p>
      <div className="arrow-voting-icons__container">
        <img
          className="arrow-up-icon"
          src={hasUpVoted ? arrowUpOrange : arrowUp}
          data-value="1"
          onClick={handleArticleVote}
          value="up-vote"
        />
        <img
          className="arrow-down-icon"
          src={hasDownVoted ? arrowDownOrange : arrowDown}
          data-value="-1"
          onClick={handleArticleVote}
          value="down-vote"
        />
      </div>
    </div>
  );
};

export default ArticleVotes;
