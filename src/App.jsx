import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArticlesList from "./components/ArticlesList";
import ArticleCard from "./components/ArticleCard";
import './App.css'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
      </Routes>
      {/* <ArticlesList /> */}
    </>
  );
}

export default App
