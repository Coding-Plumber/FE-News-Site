import axios from "axios";

export const getArticles = async () => {
  const response = await axios.get(
    "https://nc-news-1z1d.onrender.com/api/articles"
  );

  return response;
};

export const getArticleById = async (articleId) => {
  const response = await axios.get(
    `https://nc-news-1z1d.onrender.com/api/articles/${articleId}`
  );

  return response;
};

export const getArticleCommentsById = async (articleId) => {
  const response = await axios.get(
    `https://nc-news-1z1d.onrender.com/api/articles/${articleId}/comments`
  );

  return response;
};

export const patchArticleVote = async (articleId, newVote) => {

  const response = await axios.patch(
    `https://nc-news-1z1d.onrender.com/api/articles/${articleId}`,
    { "inc_votes" : newVote }
  );

  return response;
};
