const ArticleCard = ({ article }) => {
const createdAtString = article.created_at;
const formattedCreatedAt = createdAtString.substring(0, 10);
const articleTitle = article.title;
const lowercaseTitle = articleTitle.toLowerCase();

  return (
    <li className="article-item" key={article.article_id}>
      <h2 className="article-title">{lowercaseTitle}</h2>
      <img className="article-img" src={article.article_img_url} />
      <p>Author: {article.author}</p>
      <p>Published: {formattedCreatedAt }</p>
      <p>Votes: {article.votes}</p>
    </li>
  );
};

export default ArticleCard;
