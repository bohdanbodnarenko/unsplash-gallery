import React from "react";

import SinglePost from "../Models/SinglePost/SinglePost";
import "./Feed.css";
const Feed = props => {
  return (
    <section>
      {props.posts.map(post => (
        <SinglePost post={post} key={post.id} />
      ))}
    </section>
  );
};

export default Feed;
