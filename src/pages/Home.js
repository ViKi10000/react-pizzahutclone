import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizzamain.webp";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Pizza paradise </h1>
        <p> Tasty,Delicious,Juicy</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;