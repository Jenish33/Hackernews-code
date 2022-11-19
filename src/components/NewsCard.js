const NewsCard = ({ article }) => {
  if (!article.title) return null;
  return (
    <div className="news-card card text-white bg-dark mb-3 p-3">
      <h3 className="card-title">{article.title}</h3>
      <a className="card-link" style={{fontSize: 12}}href={article.url}>Read more</a>
    </div>
  )
};

export default NewsCard;