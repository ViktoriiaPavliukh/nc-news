import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ArticleList from "./ArticlesList"; 
import { getArticlesByTopic } from "../../public/api/api";

const TopicPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const topicSlug = searchParams.get("topic");

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticlesByTopic(topicSlug)
      .then((response) => {
        setArticles(response.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, [topicSlug]);

  if (loading) {
    return <p className="state-loading">Loading articles...</p>;
  }

  return (
    <div className="topic-page">
      {!topicSlug ? (
        <ArticleList />
      ) : (
        <>
          <h2 className="topic-title">Articles related to {topicSlug}</h2>
          <ul className="articles-topic">
            {articles.map((article) => (
              <li key={article.article_id} className="item-topicpage">
                <Link
                  to={`/articles/${article.article_id}`}
                  className="article-link"
                >
                  <img src={article.article_img_url} alt="article image" className="topic-image" />
                  <h3 className="article-title">{article.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TopicPage;
