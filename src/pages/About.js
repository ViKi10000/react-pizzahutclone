import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <h3>More Than Great Food</h3>
        <p>There's nothing cookie-cutter about pizza paradize and our franchise partners.Not the pizza and definitely not
            the people.A career with pizza paradize or one of local independently owned franchises is for those that stand out
            ;we're constantly pushing boundaries andhelping each other become the best we can be. if you're ready  to live 
            life unboxed,you're ready for a career with the pizza Hut Brand.

          
        </p>
      </div>
    </div>
  );
}

export default About;