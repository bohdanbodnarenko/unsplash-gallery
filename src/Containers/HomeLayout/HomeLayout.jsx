import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import GreetingSection from "./GreetingSection/GreetingSection";
import { getPosts } from "../../store/actons/Actions";
import Feed from "../../Components/Feed/Feed";
import { getLinkToRandomPost } from "../../Environment/env";
import Axios from "axios";
import Spinner from "../../UI/Spinner/Spinner";

export class HomeLayout extends Component {
  state = {
    randomPost: null
  };
  render() {
    return (
      <div>
        {this.props.posts && this.state.randomPost ? (
          <Fragment>
            <GreetingSection post={this.state.randomPost} />
            <Feed posts={this.props.posts} />
          </Fragment>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }

  componentDidMount = () => {
    this.props.getPosts(30);
    Axios.get(getLinkToRandomPost())
      .then(resp => this.setState({ randomPost: resp.data }))
      .catch(() => {
        this.setState({
          ...this.state,
          randomPost: this.props.posts.filter(post => post.width > 5000)[0]
        });
      });
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: count => dispatch(getPosts(count))
  };
};
const mapStateToProps = state => {
  return {
    posts: state.data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeLayout);
