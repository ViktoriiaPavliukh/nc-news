import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../../public/api/api";

const TopicsList = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTopics()
      .then((response) => {
        setTopics(response.data.topics);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading topics...</p>;
  }

  return (
    <ul className="topics-list">
      {topics.map((topic) => {
        return (
          <li key={topic.slug} className="topic-item">
            <Link className="topic-link" to={`/articles?topic=${topic.slug}`}>
              <h2 className="topics-title">{topic.slug}</h2>
              <p className="topic-description">Description: {topic.description}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default TopicsList;
