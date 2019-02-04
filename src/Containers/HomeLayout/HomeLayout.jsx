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
    randomPost: null,
    scrollPosition: 0
  };
  render() {
    //TODO scroll back to position
    return (
      <div>
        {this.props.posts && this.state.randomPost ? (
          <Fragment>
            <GreetingSection
              submit={this.onSearchSubmit()}
              post={this.state.randomPost}
            />
            <Feed posts={this.props.posts} />
          </Fragment>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }

  componentWillUnmount = () => {
    // alert(window.screenY)
  };

  onSearchSubmit = () => event => {
    event.preventDefault();
    if (event.target.search.value) {
      this.props.history.push(`/search/${event.target.search.value}`);
    }
  };

  componentDidMount = () => {
    this.props.getPosts(30);
    Axios.get(getLinkToRandomPost())
      .then(resp => this.setState({ randomPost: resp.data }))
      .catch(() => {
        this.props.getPosts(30);
        this.setState({
          ...this.state,
          randomPost: this.props.posts.filter(
            post => post.width > 4000
          )[0]
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
    posts: state.homePosts
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeLayout);
