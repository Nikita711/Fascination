import React, { Component } from "react";
import Card from "./Card";
import Footer from "./Footer";
class Cards extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-fluid d flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Cards;
