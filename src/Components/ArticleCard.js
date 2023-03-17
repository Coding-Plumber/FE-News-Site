import "./ArticleCard.css";

const ArticleCard = ({ article, onClick }) => {
  const date = article.created_at.substring(0, 10);

  return (
    <article
      key={article.article_id}
      className="articlecard-main__container"
      onClick={onClick}
    >
      <div className="articlecard-image__container">
        <img
        alt="topic of the card container"
          className="article-card-image"
          src={article.article_img_url}

        />
      </div>
      <div className="articlecard-body__container">
        <div className="articlecard-date-author__container">
          <address>{article.author}</address>
          <time dateTime={date}>{date}</time>
        </div>
        <div className="articlecard-article-description__container">
          <p className="articlecard-body__text">{article.body}</p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
