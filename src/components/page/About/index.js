import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [active, setActive] = useState(true);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const watnedScrollStart = 500;
    if (Math.ceil(scrolled) >= watnedScrollStart) {
      setActive(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <>
      <div className="about-container" id="about">
        <div className={active ? "about-box" : "about-box active"}>
          <div className="about-box-title">
            <h1>About me</h1>
          </div>
          <div className="about-box-paragraph">
            <br />
            <p>
              I finished elemetary school in my hometown Vareš.After that i
              finished high school "Elektrotehnicka Skola Za Energetiku" in
              Sarajevo.Now I am student at Faculty of Information Technologies,
              University "Džemal Bijedić" in Mostar.Currently focused on
              learning software and web developing.I have experience working in
              C++,C#,HTML5,CSS,JavaScript,React,Angular.Competitive and always
              ready for new opportunities and tasks.I'm looking forward to
              finding a good job where I can constantly expand my knowledge, and
              to persue my career as a developer.I can speak English
              fluently.Besides studying,I partly worked as DJ,i like to play all
              kinds of sports,especially football and basketball.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
