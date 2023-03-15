import "./Comment.css";

const Comment = ({ comment }) => {

  const date = comment.created_at.substring(0, 10);
  return (
    <div className="comment__container">
      <div className="comment-date-author__container">
        <div className="comment-author">{comment.author}</div>
        <div className="comment-text">{date}</div>
      </div>
      <div className="comment-text">{comment.body}</div>
      <div className="comment-votes">votes: {comment.votes}</div>

    </div>
  );
};

export default Comment;
