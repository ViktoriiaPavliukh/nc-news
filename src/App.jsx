import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArticlesList from "./components/ArticlesList";
import ArticleCard from "./components/ArticleCard";
import Topics from "./components/TopicsList";
import TopicPage from "./components/TopicPage";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<TopicPage />} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
