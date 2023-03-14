import axios from "axios";

export const getArticles = async () => {
  try {
    // console.log('before getting articles from server');
    const response = await axios.get(
      "https://nc-news-1z1d.onrender.com/api/articles"
    );
    // console.log(response, '<--- response after server request');

    return response;
  } catch (error) {
    console.log(error);
    // throw new Error("Error fetching articles");
  }
};

export const getArticleById = async (articleId) => {
  try {
    const response = await axios.get(`/api/articles/${articleId}`);
    return response;
  } catch (error) {
    console.log(error);
    // throw new Error("Error fetching articles");
  }
};

export const getArticleCommentsById = async (articleId) => {
  console.log(articleId, "<-- id within getArticleCOmments");
  try {
    const response = await axios.get(
      `https://nc-news-1z1d.onrender.com/api/articles/${articleId}/comments`
    );

    return response;
  } catch (error) {
    console.log(error);
    // throw new Error("Error fetching articles");
  }
};
