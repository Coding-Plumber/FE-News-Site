import "./ArticleCard.css";

const ArticleCard = (props) => {
  const date = props.articles.created_at.substring(0, 10);

  return (
    <div className="articlecard-main__container">
      <div className="articlecard-image__container">
        <img src={props.articles.article_img_url} alt="article image" />
      </div>
      <div className="articlecard-body__container">
        <div className="articlecard-date-author__container">
          <div>{props.articles.author}</div>
          <div>{date}</div>
        </div>
        <div className="articlecard-article-description__container">
          <p className="articlecard-body__text">{props.articles.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
