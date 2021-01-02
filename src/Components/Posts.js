import React, { useState, useEffect } from "react";

const Posts = ({ match }) => {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://www.reddit.com/r/${match.params.subreddit}.json`
    );
    const items = await fetchItem.json();
    setItem(items.data.children);
    console.log(items.data.children);
  };

  return (
    <div className="subreddit-list">
      {item.map((item) => (
        <div>
          <h3 key={item.data.id}>{item.data.title}</h3>
          <p>{item.data.selftext}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
