import React from "react";
import "./Home.css";
import Pic from "../../../images/profile.jpg";
//<img src={Pic} alt="" className="profile-pic"></img>
const Home = () => {
  return (
    <>
      <div className="home-container" id="home">
        <h1>WELCOME</h1>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={Pic} alt="" className="profile-pic"></img>
            </div>
            <div className="flip-card-back">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1>Hello,</h1>
              <p>I'm Tarik and Welcome to my Website!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
