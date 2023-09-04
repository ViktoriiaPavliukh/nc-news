const ArticleCard = ({ article }) => {
  return (
    <li className="article-item" key={article.article_id} >
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Published: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <img className="article-img" src={article.article_img_url} />
    </li>
  );
};

export default ArticleCard;
