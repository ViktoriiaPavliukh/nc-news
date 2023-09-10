import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getTopics } from "../../public/api/api";


const Header = () => {
  const [topics, setTopics] = useState([]);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    getTopics()
      .then((response) => {
        setTopics(response.data.topics);
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

   const toggleDropdown = () => {
     setIsDropdownOpen(!isDropdownOpen);
   };

  return (
    <div className="header">
      <Link className="header-link logo" to="/">
        NEWS
      </Link>
      <ul className="nav">
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link
              key={topic.slug}
              className="header-link"
              to={`/articles?topic=${topic.slug}`}
            >
              {topic.slug}
            </Link>
          </li>
        ))}
        <li key={"all articles"}>
          <Link className="header-link" to="/articles">
            all articles
          </Link>
        </li>
      </ul>
      <div class="mob-menu-button">
        <button
          class="menu-button"
          onClick={toggleDropdown}
          type="submit"
        ></button>
        <ul className={`dropdown-content ${isDropdownOpen ? "open" : ""}`}>
          {topics.map((topic) => (
            <li key={topic.slug}>
              <Link
                key={topic.slug}
                className="header-link"
                to={`/articles?topic=${topic.slug}`}
              >
                {topic.slug}
              </Link>
            </li>
          ))}
          <li key="all">
            <Link className="header-link" to="/articles">
              All Articles
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
