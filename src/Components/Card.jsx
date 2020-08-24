import React from "react";
import "./Cards.css";

import img1 from "../Images/3372197.jpg";
const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={img1} alt="image 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          asperiores nostrum commodi pariatur perferendis molestias sint
          voluptatibus voluptatum natus aperiam maiores dolore maxime earum nemo
          blanditiis, nam ducimus, quo sunt.
        </p>
        <a href="#" className="btn btn-outline-success">
          Click For More
        </a>
      </div>
    </div>
  );
};
export default Card;
