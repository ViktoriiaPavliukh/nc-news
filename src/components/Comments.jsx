import { useState } from "react";
import { useParams } from "react-router-dom";
import { postCommentByArticleId } from "../../public/api/api"


const Comments = ({ comments, loading, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
     const newCommentData = {
       username: "weegembump",
       body: newComment,
     };
    postCommentByArticleId(article_id, newCommentData).then((response) => {
      setComments([...comments, response])
    }); 
    setNewComment("");
  }
  return loading ? (
    <p>Loading comments...</p>
  ) : (
    <div className="comments">
      <h3>Comments</h3>
      <form className="comment-adder" onSubmit={handleSubmit}>
        <label htmlFor="newComment">Add a comment</label>
        <textarea
          className="new-comment"
          id="newComment"
          value={newComment}
          placeholder="Type here..."
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button className="add-btn">Add</button>
      </form>
      {comments.length === 0 ? (
        <p>No comments available.</p>
      ) : (
        <ul className="comments-list">
          {comments.map((comment) => (
            <li key={comment.comment_id} className="comment-item">
              <p className="comment-body">{comment.body}</p>
              <span>{comment.votes}</span>
              <h6>Author: {comment.author}</h6>
              <h6>Created: {comment.created_at}</h6>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;