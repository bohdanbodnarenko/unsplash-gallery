import React from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import "./SinglePost.css";
import { getDownloadLink } from "../../../Environment/env";

const SinglePost = props => {
  return (
    <div className="post">
      <Link to={`/post/${props.post.id}`}>
        <div className="mask" />
        <div className="likes-wrapper">
          <i className="material-icons">favorite</i>
          <span>{props.post.likes}</span>
        </div>
        <img src={props.post.urls.small} alt={props.post.description} />
        <div className="user-wrapper">
          <span>{props.post.user.name}</span>
          <br />
          <span className="time">
            {moment(props.post.created_at).fromNow()}
          </span>
        </div>
      </Link>
      <a href={getDownloadLink(props.post.id)}>
        <div className="download-wrapper">
          <i alt="Download" className="material-icons">
            arrow_downward
          </i>
        </div>
      </a>
    </div>
  );
};

export default SinglePost;
