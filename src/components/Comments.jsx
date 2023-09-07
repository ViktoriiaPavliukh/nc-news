const Comments = ({ comments, loading }) => {
  return (
    (loading) 
    ? 
    <p>Loading comments...</p> 
    :
    <div className="comments">
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments available.</p>
      ) : (
        <ul className="comments-list">
          {comments.map((comment) => (
            <li key={comment.comment_id} className="comment-item">
              <p>{comment.body}</p>
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