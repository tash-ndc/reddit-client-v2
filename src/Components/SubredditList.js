import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      {items.map((item) => (
        <div>
          <img
            src={item.data.icon_img}
            style={{ height: "40px", width: "40px" }}
            alt={item.data.display_name}
          />
          <h3 key={item.data.id}>
            <Link to={`/subreddit/${item.data.display_name}`}>
              {item.data.display_name}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SubredditList;
