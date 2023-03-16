export const randomFiveArticles = (articles) => {
  const randomArticles = [];

  while (randomArticles.length < 5) {
    const randomIndex = Math.floor(Math.random() * articles.length);
    const randomArticle = articles[randomIndex];

    // need to check for arrays so we dont end up with duplicates

    const articleExists = randomArticles.some(
      (article) => article.article_id === randomArticle.article_id
    );

    // If the article does not already exist, add it to the array
    if (!articleExists) {
      randomArticles.push(randomArticle);
    }
  }
  return randomArticles;
};
