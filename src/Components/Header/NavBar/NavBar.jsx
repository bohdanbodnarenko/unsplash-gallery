import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import posed from "react-pose";

const Box = posed.div({
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});
const NavBar = (props) => {
  const links = props.categories.map(link => (
    <NavLink key={link} to={`/search/${link}`}>
      <Box>{link}</Box>
    </NavLink>
  ));
  return (
    <nav>
      <NavLink exact to="/">
        HOME
      </NavLink>
      {links}
    </nav>
  );
};

export default NavBar;
