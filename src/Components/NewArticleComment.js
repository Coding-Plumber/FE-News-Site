import "./NewArticleComment.css";
import React, { useState } from "react";

const NewArticleComment = ({ onPostClick, id }) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [username, setUsername] = useState("");
  const [bodyContent, setBodyContent] = useState("");

  const handleClick = () => {
    setShowCommentBox((prevState) => !prevState);
    onPostClick();
  };

  const handleClickSubmission = async (event) => {
    
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };

  const handleBodyContentChange = (event) => {
    setBodyContent(event.target.value);
    console.log(bodyContent);
  };

  return (
    <>
      <div className="new-article-comment__flex-container">
        <button className="article-comment-reply__btn" onClick={handleClick}>
          Post
        </button>
      </div>
      <div className="show-comment-box__container">
        {showCommentBox && (
          <div className="comment-box__container">
            <div className="body-content__container">
              <textarea
                onChange={handleBodyContentChange}
                className="body-content__input"
                id="body-content"
                name="body-content"
              ></textarea>
            </div>
            <div className="username-input__container">
              <input
                onChange={handleUsernameChange}
                className="username-content__input"
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              {}
              <button
                onClick={handleClickSubmission}
                className="comment-box-submit__btn"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

NewArticleComment.defaultProps = {
  onPostClick: () => {},
};

export default NewArticleComment;
