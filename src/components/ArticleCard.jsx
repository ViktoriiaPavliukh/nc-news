import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../public/api/api";


// function ArticleCard(article) {
//   const { article_id } = useParams();
//     useEffect(() => {
//       getArticleById(article_id).then((result) => {
//         console.log(result);
//         setSingleArticle(result.data.articles);

//       })
//     }, []);

//     return <p>Article</p>
// }

// export default ArticleCard;
const ArticleCard = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((result) => {
      console.log(result);
      setSingleArticle(result);
    });
  }, []);

  // const articleTitle = singleArticle.title;
  // const lowercaseTitle = articleTitle.toLowerCase();

  return (
    <div class="single-article">
      <span>Article {article_id}</span>
      <span>{singleArticle.topic}</span>
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
      <h6> Votes: {singleArticle.votes}</h6>
    </div>
  );
};

export default ArticleCard;

// // app.get("/api/articles/:article_id", getArticleById);
