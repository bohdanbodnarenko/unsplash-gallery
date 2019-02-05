import React, { Component } from "react";

import Axios from "axios";
import "./DetailPost.css";
import { getLinkToPost, getDownloadLink } from "../../Environment/env";
import Spinner from "../../UI/Spinner/Spinner";

export class DetailPost extends Component {
  state = {
    post: null
  };

  getCoeficient = () => {
    if (this.state.post.height / 4 <= window.innerHeight - 150) {
      return 4;
    } else {
      if (this.state.post.height / 5 <= window.innerHeight - 150) {
        return 5;
      } else {
        if (this.state.post.height / 6 <= window.innerHeight - 150) {
          return 6;
        } else {
          return 8;
        }
      }
    }
  };

  closeHandler = () => {
    if (this.props.history.length > 1) {
      this.props.history.goBack();
    } else {
      this.props.history.push("/");
    }
  };
  render() {
    try {
      console.log(this.state.post.width);
    } catch {}
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
            //TODO max width to window
              style={
                this.state.post.width > 8000
                  ? {
                      width: this.state.post.width / 8,
                      height: this.state.post.height / 8,
                    }
                  : {
                      width: this.state.post.width / this.getCoeficient(),
                      height: this.state.post.height / this.getCoeficient()
                    }
              }
              alt={this.state.post.description}
              className="mainPhoto"
              src={this.state.post.urls.regular}
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
