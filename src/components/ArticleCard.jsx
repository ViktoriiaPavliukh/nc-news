import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  getCommentsByArticleId,
  updateVotesByArticleId
} from "../../public/api/api";
import Comments from "./Comments";


const ArticleCard = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [voted, setVoted] = useState(false);
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

  const handleVote = (newVoteCount) => {
    if (!voted) {
       setSingleArticle((prevArticle) => ({
        ...prevArticle,
        votes: prevArticle.votes + newVoteCount
      }));
      setVoted(true);

      updateVotesByArticleId(article_id, newVoteCount)
      .then((result)=> {console.log(result)})
      .catch((error) => {
          console.error("Failed to vote:", error.message);
          setSingleArticle((prevArticle) => ({
            ...prevArticle,
            votes: prevArticle.votes - newVoteCount
          }));
          setVoted(false);
        });
    }
  };

  if (loading) {
    return <p className="state-loading">Loading...</p>; 
  }
  // const articleTitle = singleArticle.title;
  // const lowercaseTitle = articleTitle.toLowerCase();

  return (
    <div class="single-article">
      <span className="article-top">
        Article {article_id} / {singleArticle.topic}
      </span>

      <h3 class="article-title">{singleArticle.title}</h3>

      {/* <h3 class="article-title">{(singleArticle.title).toLowerCase()}</h3> */}
      <img
        className="article-img"
        src={singleArticle.article_img_url}
        alt="image of article"
      />
      {/* <h5>Published: {singleArticle.created_at.substring(0, 10)}</h5> */}
      <h5>Published: {singleArticle.created_at}</h5>
      <p> {singleArticle.body} </p>
      <h6>Author: {singleArticle.author}</h6>
      <div className="votes">
        <h6> Votes: {singleArticle.votes}</h6>
        <div className="vote-buttons">
          <button
            className="vote-btn"
            onClick={() => handleVote(1)}
            disabled={voted}
          >
            +
          </button>
          <button
            className="vote-btn"
            onClick={() => handleVote(-1)}
            disabled={voted}
          >
            -
          </button>
        </div>
      </div>
      <Comments
        comments={comments}
        setComments={setComments}
        loading={loading}
      />
    </div>
  );
};

export default ArticleCard;
