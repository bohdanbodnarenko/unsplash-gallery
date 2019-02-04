import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import "./Header.css";
import SearchBar from "./SearchBar/SearchBar";
import NavBar from "./NavBar/NavBar";

const Header = props => {
  const onSearchSubmit = () => event => {
    event.preventDefault();
    if (event.target.search.value) {
      props.history.push(`/search/${event.target.search.value}`);
      event.target.search.value=''
    }
  };
  return (
    <header>
      <div className="searchWrapper">
        <Link className="logo" to="/">
          Unsplash Gallery Appp
        </Link>
        <SearchBar submit={onSearchSubmit()} />
      </div>
      <NavBar />
    </header>
  );
};

export default withRouter(Header);
