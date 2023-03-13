import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navigation">
      <NavLink to="">Todo</NavLink>
      <br />
      <NavLink to="/todo-finished">Todo finished</NavLink>
    </nav>
  );
};

export default Nav;
