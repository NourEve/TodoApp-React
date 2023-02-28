import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <NavLink to="">Todo</NavLink>
        <br />
        <NavLink to="/todo-finished">Todo finished</NavLink>
      </nav>
    </div>
  );
};

export default Nav;
