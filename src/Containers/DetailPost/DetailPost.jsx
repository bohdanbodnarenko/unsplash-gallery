import React, { Component, Fragment } from "react";

import Axios from "axios";
import "./DetailPost.css";
import { getLinkToPost, getDownloadLink } from "../../Environment/env";
import Spinner from "../../UI/Spinner/Spinner";

export class DetailPost extends Component {
  state = {
    post: null
  };

  closeHandler = () => {
    if (this.props.history.length > 1) {
      this.props.history.goBack();
    } else {
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div className="backdrop" onClick={this.closeHandler}>
        {this.state.post ? (
          <div className="content" onClick={event => event.stopPropagation()}>
            <div className="top-container">
              <div className="user-data">
                <img
                  src={this.state.post.user.profile_image.medium}
                  alt=""
                  className="user-img"
                />
                <div style={{ paddingLeft: "10px", display: "block" }}>
                  <span className="user-name">{this.state.post.user.name}</span>
                  <span className="username">
                    @{this.state.post.user.username}
                  </span>
                </div>
              </div>
              <div className="likes-download-wrapper">
                <div className="likes-container">
                  <i style={{ color: "red" }} className="material-icons">
                    favorite
                  </i>
                  <span>{this.state.post.likes}</span>
                </div>
                <a href={getDownloadLink(this.state.post.id)}>
                  <div className="download-container">
                    <i
                      style={{ color: "#88b2d3" }}
                      alt="Download"
                      className="material-icons"
                    >
                      arrow_downward
                    </i>
                    <span>Download</span>
                  </div>
                </a>
              </div>
            </div>
            <img
              alt={this.state.post.description}
              className="mainPhoto"
              src={this.state.post.urls.full}
            />
            <div className="bottom-container">
              <span>user</span>
              <span>likes</span>
              <span>donload</span>
            </div>
          </div>
        ) : (
          <Spinner />
)}
      </div>
    );
  }

  componentDidMount = () => {
    Axios.get(getLinkToPost(this.props.match.params.id)).then(resp =>
      this.setState({ post: resp.data })
    );
  };
}

export default DetailPost;