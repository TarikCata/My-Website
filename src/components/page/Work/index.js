import React, { useState, useEffect } from "react";
import Carditem from "./CardItem";
import Carditem2 from "./CardItems2";
import "./work.css";
import "./CardItem/carditem.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Work = () => {
  const [active, setActive] = useState(false);
  const [stanje, setStanje] = useState(false);
  const [arrClicked, setArrClicked] = useState(false);

  const showCards = () => {
    const scrolled = window.scrollY;
    const watedScroll = 1378;
    if (Math.ceil(scrolled) > watedScroll) {
      setActive(true);
    }
  };

  const changeStanje = () => {
    const skrolano = window.scrollY;
    const treba = 1890;
    if (Math.ceil(skrolano) > treba) {
      setStanje(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showCards);
    window.addEventListener("scroll", changeStanje);
  }, []);

  return (
    <>
      <div id="work" className="work-container">
        <div className="work-content">
          <div className="work-title-paragraph">
            <div className="work-title">
              <h1>WORK</h1>
            </div>
            <div className="work-paragraph">
              <p>Some of the work I did...</p>
            </div>
            <div className="kartice">
              <div className={active ? "cards active" : "cards"}>
                <Carditem />
              </div>
              <div className={stanje ? "cards- active" : "cards-"}>
                <Carditem2 />
              </div>
              <div className="ikona-div">
                <FaArrowAltCircleRight
                  onClick={() => {
                    setArrClicked(!arrClicked);
                    console.log(arrClicked);
                  }}
                  className="icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
