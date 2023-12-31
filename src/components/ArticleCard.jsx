import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  getCommentsByArticleId,
  updateVotesByArticleId
} from "../../public/api/api";
import Comments from "./Comments";
import VoteButtons from "./VoteButtons";


const ArticleCard = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getArticleById(article_id).then((result) => {
      setSingleArticle(result);
      setLoading(false);
    });
    getCommentsByArticleId(article_id).then((result) => {
      setComments(result);
    })
  }, []);

  if (loading) {
    return <p className="state-loading">Loading...</p>; 
  }

  return (
    <div className="single-article">
      <span className="article-top">
        Article {article_id} / {singleArticle.topic}
      </span>
      <h3 className="article-title">{(singleArticle.title).toLowerCase()}</h3>
      <img
        className="article-img"
        src={singleArticle.article_img_url}
        alt="image of article"
      />
      <p className="article-body"> {singleArticle.body} </p>
      <div className="article-creation">
        <p>Author: <span className="author-name"> {singleArticle.author}</span></p>
        <p>Published: {singleArticle.created_at.substring(0, 10)}</p>
      </div>
      <VoteButtons article_id={article_id} initialVotes={singleArticle.votes} />
      <Comments
        comments={comments}
        setComments={setComments}
        loading={loading}
      />
    </div>
  );
};

export default ArticleCard;
