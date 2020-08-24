import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import Card from "./Components/Cards";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/Projects" component={Projects} exact />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/" component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
        <Card />
      </React.Fragment>
    );
  }
}

export default App;
