import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../navigation/home-page/Home";
import Header from "./header/Header";
import "./App.css";
import ItemDeteils from "../navigation/item-deteils/ItemDeteils";
import About from "../navigation/about-page/About";
import Form from "./form/Form";

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

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/:id" component={ItemDeteils} />
            <Route path="/create" component={Form} />
            <Route path="/edit" component={Form} />

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
