import React, { useEffect, useState } from "react";
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
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    );

  }

  export default ArticlesList;
