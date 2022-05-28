import React from "react";
import { Link, Switch, Route, NavLink } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
          <Link className="header-item" to="/">
            Home
          </Link>
          <Link className="header-item" to="/about">
            About
          </Link>
        </div>

        <NavLink className="header-item new-item" to="/create">
          + New Item
        </NavLink>
      </div>
    );
  }
}

export default Header;
