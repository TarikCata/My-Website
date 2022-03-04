import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import { useEffect } from "react/cjs/react.development";

function Nav() {
  const [click, setClick] = useState(false);
  const [nav, setNav] = useState(false);

  const myFunk = () => {
    const sc = window.scrollY;
    const cc = 162;
    if (Math.ceil(sc) >= cc) {
      setNav(true);
    } else if (Math.ceil(sc) <= cc) {
      setNav(false);
    }
  };

  window.addEventListener("scroll", myFunk);

  useEffect(() => {
    myFunk();
  }, []);

  return (
    <>
      <nav className={nav ? "navbar active" : "navbar"}>
        <div className="container">
          <ul
            className={click ? "menu-item active" : "menu-item"}
            onClick={() => setClick(!click)}
          >
            <Link
              to="home"
              activeClass="active-link"
              spy={true}
              smooth={true}
              offsest={-300}
              duration={1000}
              onClick={() => setClick(!click)}
              className="menu-li one"
            >
              Home
            </Link>
            <Link
              to="about"
              activeClass="active-link"
              spy={true}
              smooth={true}
              offsest={0}
              duration={1000}
              onClick={() => setClick(!click)}
              className="menu-li two"
            >
              About
            </Link>
            <Link
              to="work"
              activeClass="active-link"
              spy={true}
              smooth={true}
              offsest={-1000}
              duration={1000}
              onClick={() => setClick(!click)}
              className="menu-li three"
            >
              Work
            </Link>
            <Link
              to="contact"
              activeClass="active-link"
              spy={true}
              smooth={true}
              offsest={-700}
              duration={1000}
              onClick={() => setClick(!click)}
              className="menu-li four"
            >
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
