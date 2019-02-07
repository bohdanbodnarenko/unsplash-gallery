import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import "./Header.css";
import SearchBar from "./SearchBar/SearchBar";
import NavBar from "./NavBar/NavBar";
import SideDrawer from "../../UI/SideDrawer/SideDrawer";

class Header extends Component {
  state = {
    isSideBarOpen: false,
    categories: [
      "Wallpapers",
      "Textures",
      "Nature",
      "Architecture",
      "Business",
      "Travel",
      "Fashion",
      "Food",
      "People",
      "Health",
      "Arts"
    ]
  };
  onSearchSubmit = () => event => {
    event.preventDefault();
    if (event.target.search.value) {
      this.props.history.push(`/search/${event.target.search.value}`);
      event.target.search.value = "";
    }
  };

  toggleSideBar = () => {
    this.setState({ ...this.state, isSideBarOpen: !this.state.isSideBarOpen });
  };
  render() {
    const iClasses = ["material-icons", "menu"];
    if (this.state.isSideBarOpen) {
      iClasses.push("vertical");
    }
    return (
      <header>
        <SideDrawer close={this.toggleSideBar} show={this.state.isSideBarOpen} />
        <div className="searchWrapper">
          <i onClick={this.toggleSideBar} className={iClasses.join(" ")}>
            menu
          </i>
          <Link className="logo" to="/">
            Unsplash Gallery Appp
          </Link>
          <SearchBar submit={this.onSearchSubmit()} />
        </div>
        <NavBar categories={this.state.categories} />
      </header>
    );
  }
}

export default withRouter(Header);
