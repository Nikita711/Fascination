import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/Projects" exact component={Projects} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Skills" component={Cards} />
              <Route path="#" component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
