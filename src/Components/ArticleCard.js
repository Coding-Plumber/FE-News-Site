import "./ArticleCard.css";

const ArticleCard = ({articles, onClick}) => {
  const date = articles.created_at.substring(0, 10);
  console.log(articles, '<-- in articlecard')
  return (
    <div key={articles.article_id} className="articlecard-main__container" onClick={onClick}>
      <div className="articlecard-image__container">
        <img src={articles.article_img_url} alt="article image" />
      </div>
      <div className="articlecard-body__container">
        <div className="articlecard-date-author__container">
          <div>{articles.author}</div>
          <div>{date}</div>
        </div>
        <div className="articlecard-article-description__container">
          <p className="articlecard-body__text">{articles.body}</p>
        </div>
        {/* <div className="articlecard-vote__container">
          <p>{articles.votes}</p>
        </div> */}
      </div>
    </div>
  );
};

export default ArticleCard;
