import { useState, useEffect } from "react";
import {
  getArticleById,
  getArticleCommentsById,
  getArticles,
} from "../Api/Api";

const useFetchArticleData = (id, articles, setArticles) => {
  const [article, setArticle] = useState(null);
  const [articleComments, setArticleComments] = useState([]);

  const fetchAllArticles = async () => {
    try {
      const response = await getArticles();
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchArticle = async () => {
    try {
      const response = await getArticleById(id);
      setArticle(response.data.articleById);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await getArticleCommentsById(id);
      setArticleComments(response.data.articleComments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (articles.length === 0) {
      fetchAllArticles();
    }
  }, [articles]);

  useEffect(() => {
    if (!article) {
      fetchArticle();
    }
  }, [id, article]);

  useEffect(() => {
    if (article) {
      fetchComments();
    }
  }, [id, article]);

  return { article, articleComments };
};


export default useFetchArticleData;