import Comment from "./Comment";
import {getArticleCommentsById} from '../Api/Api';
import { useState, useEffect } from "react";

const CommentsContainer = ({ id}) => {

    const [articleComments, setArticleComments] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const fetchComments = async () => {
      try {
        const response = await getArticleCommentsById(id);
        setArticleComments(response.data.articleComments);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchComments();
    }, [id]);
  
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
