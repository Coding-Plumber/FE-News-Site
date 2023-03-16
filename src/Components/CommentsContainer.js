import Comment from "./Comment";

const CommentsContainer = ({ articleComments, loading}) => {
  console.log(articleComments, "<-- articleComments");
  return (
    <div className="article-page__comments">
      {loading ? (
        <p>Loading...</p>
      ) : (
        articleComments.map((comment) => {
          return <Comment key={comment.comment_id} comment={comment} />;
        })
      )}
    </div>
  );
};

export default CommentsContainer;
