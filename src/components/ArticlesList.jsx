import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../public/api/api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
    const[articles, setArticles] = useState([]);

    useEffect(() => {
     getArticles().then(({data}) => setArticles(data.articles));
    }, [])

    return (
      <ul className="article-list">
        {articles.map((article) => {
          return (<Link to={`/articles/${article.article_id}`} key={article.article_id} className="article-link">
            <li article={article} className="article-item" key={article.article_id}>
            <h2 className="article-title">{article.title}</h2>
            <img className="article-img" src={article.article_img_url} alt="image of article"/>
            <p>Author: {article.author}</p>
            <p>Published: {article.created_at }</p>
            <p>Votes: {article.votes}</p>
          
          </li>
         {/* <ArticleCard /> */}
          </Link>
          );
        })}
      </ul>
    );
}
  export default ArticlesList;