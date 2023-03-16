import { useState, useEffect } from "react";
import {
  getArticleById,
  getArticleCommentsById,
  getArticles,
} from "../Api/Api";

const useFetchArticleData = (id, articles, setArticles) => {
  const [article, setArticle] = useState(null);

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

  return { article };
};

export default useFetchArticleData;
