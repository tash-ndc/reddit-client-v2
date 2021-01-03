import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../SubredditList/SubredditList.css";

const SubredditList = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://www.reddit.com/subreddits.json");
    const items = await data.json();
    console.log(items.data.children);
    setItems(items.data.children);
  };

  return (
    <div className="subreddit-list">
      <h1>SubReddits</h1>
      {items.map((item) => (
        <div className="categories" key={item.data.id}>
          <img
            src={item.data.icon_img}
            style={{ height: "40px", width: "40px" }}
            alt={item.data.display_name}
          />
          <h2>
            <Link to={`/subreddit/${item.data.display_name}`}>
              {item.data.display_name}
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default SubredditList;
