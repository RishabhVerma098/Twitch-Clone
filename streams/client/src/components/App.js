import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";

const about = () => {
  return (
    <div>
      <h1>About us</h1>
    </div>
  );
};

const error = () => {
  return (
    <div>
      <h3>404 ERROR</h3>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={about} />
          <Route component={error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
