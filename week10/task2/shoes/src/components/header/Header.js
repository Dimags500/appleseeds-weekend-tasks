import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "../../navigation/home-page/Home";
import ItemDeteils from "../../navigation/item-deteils/ItemDeteils";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link className="header-item" to="/">
          Home
        </Link>
        <Link className="header-item" to="/about">
          About
        </Link>
        <Link className="header-item" to="/create">
          + New Item
        </Link>
      </div>
    );
  }
}

export default Header;
