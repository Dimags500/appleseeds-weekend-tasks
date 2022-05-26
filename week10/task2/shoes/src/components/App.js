import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { hendlerGetProducts } from "../api/hendlers";
import Home from "../navigation/home-page/Home";
import Header from "./header/Header";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header />
          <Home />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
