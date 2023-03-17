import { useState, useEffect, useCallback } from "react";
import {
  getArticleById,
  getArticles,
} from "../Api/Api";

const useFetchArticleData = (id, articles, setArticles) => {
  const [article, setArticle] = useState(null);

  const fetchAllArticles = useCallback(async () => {
    try {
      const response = await getArticles();
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  }, [setArticles]);

  useEffect(() => {
    if (articles.length === 0) {
      fetchAllArticles();
    }
  }, [articles, fetchAllArticles]);

  const fetchArticle = useCallback(async () => {
    try {
      const response = await getArticleById(id);
      setArticle(response.data.articleById);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    if (!article) {
      fetchArticle();
    }
  }, [article, fetchArticle, id]);

  return { article };
};

export default useFetchArticleData;