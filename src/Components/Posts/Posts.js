import React, { useState, useEffect } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import "../Posts/Posts.css";

const Posts = ({ match }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const fetchItem = await fetch(
        `https://www.reddit.com/r/${match.params.subreddit}.json`
      );
      const items = await fetchItem.json();
      setItem(items.data.children);
      console.log(items.data.children);
    };

    fetchItem();

    console.log(match);
  }, [match]);

  return (
    <div className="subreddit-posts">
      {item.map((item) => (
        <div className="post">
          <h1 className="title" key={item.data.id}>
            {item.data.title}
          </h1>
          <hr />
          <p className="author">
            <span>by</span> {item.data.author}
          </p>
          <img src={item.data.url} alt="" />
          <p className="content">{item.data.selftext}</p>
          <hr />
          <div className="comments-upvotes">
            <div className="comments">
              <p className="num-comments">{item.data.num_comments}</p>
              <BiMessageRoundedDots className="comment-icon" />
            </div>
            <p className="upvotes">
              {Math.round(item.data.upvote_ratio * 100)}% Upvoted
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
