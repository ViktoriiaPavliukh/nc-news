import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../public/api/api";


const ArticlesList = () => {
    const[articles, setArticles] = useState([]);

    useEffect(() => {
     getArticles().then(({data}) => setArticles(data.articles));
    }, [])

    return (
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <Link
              to={`/articles/${article.article_id}`}
              key={article.article_id}
              className="article-link"
            >
              <li
                article={article}
                className="article-item"
                key={article.article_id}
              >
                <h2 className="article-title">{article.title}</h2>
                <img
                  className="article-img"
                  src={article.article_img_url}
                  alt="image of article"
                />
                <div className="article-details">
                  <p>Author: <span className="author-name">{article.author}</span></p>
                  <p> {article.created_at.substring(0, 10)}</p>
                  <p>Likes: <span className="article-likes">{article.votes}</span></p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    );
}
  export default ArticlesList;