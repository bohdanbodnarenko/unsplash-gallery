import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsByQuery } from "../../store/actons/Actions";
import Feed from "../../Components/Feed/Feed";
import Spinner from "../../UI/Spinner/Spinner";

export class SearchLayout extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.posts ? (
          <Feed posts={this.props.posts} />
        ) : (
          <Spinner />
        )}
      </div>
    );
  }

  componentDidMount = () => {
    this.props.getPostsByQuery(30, this.props.match.params.query);
    this.props.history.listen(location =>
      this.props.getPostsByQuery(30, location.pathname.slice(location.pathname.lastIndexOf("/")+1))
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getPostsByQuery: (count, query) => dispatch(getPostsByQuery(count, query))
  };
};
const mapStateToProps = state => {
  return {
    posts: state.searchPosts
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchLayout);
