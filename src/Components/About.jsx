import React from "react";
import img2 from "../Images/4002785.jpg";
import Footer from "./Footer";
import "./About.css";

function About(props) {
  return (
    <div>
      {/* <p title={props.title} /> */}
      <div className="home-header">
        <h1>Know me better</h1>
      </div>
      <div className="home-content">
        <img src={img2} alt="Side pic for about us" />
        <p>
          <h2>Welcome</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            ipsam, quia officia, rem obcaecati quaerat culpa iusto laborum
            inventore impedit incidunt minima nihil quod sequi ab porro
            voluptates facilis dignissimos.rem obcaecati quaerat culpa iusto
            laborum inventore impedit incidunt minima nihil quod sequi ab porro
            voluptates facilis dignissimos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            consequuntur! Veritatis asperiores sunt natus eos a tempora eius
            voluptatem, neque animi architecto possimus nisi consequatur ipsum
            velit fugiat aperiam et.rem obcaecati quaerat culpa iusto laborum
            inventore impedit incidunt minima nihil quod sequi ab porro
            voluptates facilis dignissimos.rem obcaecati quaerat culpa iusto
            laborum inventore impedit incidunt minima nihil quod sequi ab porro
            voluptates facilis dignissimos.
          </p>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
