import "./ArticlePage.css";
import { useParams, useLocation } from "react-router-dom";
import { getArticleById, getArticleCommentsById } from "../Api/Api";
import React, { useEffect, useState } from "react";
import Comment from './Comment';

const ArticlePage = (props) => {
  const { id } = useParams();
  const { state } = useLocation();

  
  
  const [articleComments, setArticleComments] = useState([]);
  const [article, setArticle] = useState(
    state?.article || props.article || null
  );
  const date = article.created_at.substring(0, 10);


  // fetches articles if none have been passed through state or props using the id from params to obtain correct article

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

  useEffect(() => {
    if(article) {
        console.log('RUNNING IN GETARTICLE COMMENTS')
        const fetchComments = async () => {
          try {
            console.log(id, '<-- id');
            const response = await getArticleCommentsById(id);
            setArticleComments(response.data.articleComments);
            console.log(response.data.articleComments, '<-- response for articleCOmments')
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
            {console.log(articleComments, '<-- article Comments before article comment map')}
            {articleComments.map((comment) => {
                return (
                    < Comment 
                    key={comment.comment_id}
                    comment= {comment} />
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
