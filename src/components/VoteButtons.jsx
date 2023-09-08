import React, { useState } from "react";
import { updateVotesByArticleId } from "../../public/api/api";

const VoteButtons = ({ article_id, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [voted, setVoted] = useState(false);

  const handleVote = (newVoteCount) => {
    if (!voted) {
      setVotes((prevVotes) => prevVotes + newVoteCount);
      setVoted(true);

      updateVotesByArticleId(article_id, newVoteCount)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error("Failed to vote:", error.message);
          setVotes((prevVotes) => prevVotes - newVoteCount);
          setVoted(false);
        });
    }
  };

  return (
    <div className="votes">
      <h6> Votes: {votes}</h6>
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
  );
};

export default VoteButtons;
