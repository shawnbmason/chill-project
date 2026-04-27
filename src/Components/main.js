import "../Styles/main.css";
import React, { useState, useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import MainPage from "./mainPage.js";
import AnimatedCursor from "react-animated-cursor";
// import { motion as m } from "framer-motion";

export default function Main() {
  //👇 consts for shows and hide functions
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);

  const [show2, setShow2] = useState(false);
  const [hide2, setHide2] = useState(true);

  const [show3, setShow3] = useState(false);
  const [hide3, setHide3] = useState(true);

  const [showMain, setShowMain] = useState(false);
  const [hideMain, setHideMain] = useState(true);
  //////////////////////////////////////////////////////

  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  // 👇 useState for the toggle
  const [sectionAnimation, setSectionAnimation] = useState(false);
  const [sectionAnimation2, setSectionAnimation2] = useState(false);
  const [sectionAnimation3, setSectionAnimation3] = useState(false);

  const [sectionAnimationLogo, setSectionAnimationLogo] = useState(false);
  //   const [sectionAnimationLogoBig, setSectionAnimationLogoBig] = useState(true);

  //////////////////////////////////////////////////////////////// First onClick handler ////////////////////////////////////////////////////////////////

  const handleClick = () => {
    // 👇 toggles
    // setSectionAnimation((section) => !section);

    // 👇 use animation
    setSectionAnimation(true);

    // 👇 do not use animation
    setSectionAnimation2(false);
    setSectionAnimation3(false);

    // 👇 show body hide header tag on side.
    setHide(!hide);
    setShow(!show);

    // 👇 this will hid the body of "third" and show the tile name "Third"
    setHide3(true);
    setShow3(false);

    // 👇 this will hid the body of "second" and show the tile name "Second"
    setHide2(true);
    setShow2(false);

    // 👇 use animation/ style for logo when clicked "First" section.
    setSectionAnimationLogo(true);

    setHideMain(false);
    setShowMain(true);
  };

  //////////////////////////////////////////////////////////////// Second onClick handler ////////////////////////////////////////////////////////////////

  const handleClick2 = () => {
    // 👇 toggles
    // setSectionAnimation2((section) => !section);

    // 👇 use animation
    setSectionAnimation2(true);

    // 👇 do not use animation
    setSectionAnimation(false);
    setSectionAnimation3(false);

    // 👇 show body hide header tag on side.
    setShow2(!show2);
    setHide2(!hide2);

    // 👇 this will hid the body of "first" and show the tile name "First"
    setHide(true);
    setShow(false);

    // 👇 this will hid the body of "third" and show the tile name "Third"
    setHide3(true);
    setShow3(false);

    // 👇 use animation/ style for logo when clicked "Second" section.
    setSectionAnimationLogo(true);

    setHideMain(false);
    setShowMain(true);
  };

  //////////////////////////////////////////////////////////////// Third onClick handler ////////////////////////////////////////////////////////////////

  const handleClick3 = () => {
    // 👇 toggles
    // setSectionAnimation3((section) => !section);

    // 👇 use animation
    setSectionAnimation3(true);

    // 👇 do not use animation
    setSectionAnimation2(false);
    setSectionAnimation(false);

    // 👇 show body hide header tag on side.
    setHide3(!hide3);
    setShow3(!show3);

    // 👇 this will hid the body of "first" and show the tile name "First"
    setHide(true);
    setShow(false);

    // 👇 this will hid the body of "second" and show the tile name "Second"
    setHide2(true);
    setShow2(false);

    // 👇 use animation/ style for logo when clicked "Third" section.
    setSectionAnimationLogo(true);

    setHideMain(false);
    setShowMain(true);
  };

  const handleClickMain = () => {
    // 👇 hide animation/ style for "First", "Second" and "Third" section.
    setSectionAnimation(false);
    setSectionAnimation2(false);
    setSectionAnimation3(false);

    // 👇 reset all hidden status to true.
    setHide(true);
    setHide2(true);
    setHide3(true);

    // 👇 reset all hidden status to false.
    setShow(false);
    setShow2(false);
    setShow3(false);

    // 👇 change styles back to original styling
    setSectionAnimationLogo(false);

    setHideMain(true);
    setShowMain(false);
  };

  return (
    <div>
      <div className="wrapper" ref={parent}>

        <AnimatedCursor
            innerSize={10}
            outerSize={10}
            color="229, 177, 0"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
          />

        <div
          onClick={handleClickMain}
          className="logo"
          style={{
            // 👇 if(sectionAnimationLogo) { "50px" } else { "75px" }
            width: sectionAnimationLogo ? "50px" : "75px",
            height: sectionAnimationLogo ? "50px" : "75px",
            left: sectionAnimationLogo ? "12px" : "35px",
            top: sectionAnimationLogo ? "55px" : "",
            margin: sectionAnimationLogo ? "0px" : "50px",
            fontSize: sectionAnimationLogo ? "20px" : "30px",
          }}
        >
          Chill
        </div>

        <div
          style={{
            // backgroundColor: sectionAnimation ? "green" : "cornflowerblue",

            width: sectionAnimation ? "90vw" : "60px",
            transition: sectionAnimation ? "ease-in .2s" : "ease-in .2s",
            // cursor: sectionAnimation ? "default" : "pointer",
            overflowY: sectionAnimation ? "visible" : "hidden",
            overflowX: "hidden",
          }}
          className="nav first"
          // onClick={handleClick}
        >
          <div onClick={handleClick}>
            {hide && (
              <div className="foodHeader">
                <h4>First</h4> <p>First</p>
              </div>
            )}
          </div>

          <div
            style={{
              position: "absolute",
              left: "250px",
              top: "250px",
            }}
          >
            {show && (
              <div style={{ marginBottom: "75px" }}>
                {" "}
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            // backgroundColor: sectionAnimation2 ? "green" : "#f64444",

            width: sectionAnimation2 ? "90vw" : "60px",
            transition: sectionAnimation2 ? "ease-in .2s" : "ease-in .2s",
            // cursor: sectionAnimation2 ? "default" : "pointer",
            overflowY: sectionAnimation2 ? "visible" : "hidden",
            overflowX: "hidden",
          }}
          className="nav second"
          // onClick={handleClick2}
        >
          <div onClick={handleClick2}>
            {hide2 && (
              <div className="foodHeader">
                <h4>Second</h4> <p>second</p>
              </div>
            )}
          </div>

          <div
            style={{
              position: "absolute",
              left: "250px",
              top: "250px",
            }}
          >
            {show2 && (
              <div style={{ marginBottom: "75px" }}>
                {" "}
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            // backgroundColor: sectionAnimation3 ? "green" : "#ffb400",

            width: sectionAnimation3 ? "90vw" : "60px",
            transition: sectionAnimation3 ? "ease-in .2s" : "ease-in .2s",
            // cursor: sectionAnimation3 ? "default" : "pointer",
            overflowY: sectionAnimation3 ? "visible" : "hidden",
            overflowX: "hidden",
          }}
          className="nav third"
          // onClick={handleClick3}
        >
          <div onClick={handleClick3}>
            {hide3 && (
              <div className="foodHeader">
                <h4>Third</h4>
                <p>Third</p>
              </div>
            )}
          </div>

          <div
            style={{
              position: "absolute",
              left: "250px",
              top: "250px",
            }}
          >
            {show3 && (
              <div style={{ marginBottom: "75px" }}>
                {" "}
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
                <h1 className="food">The Food Hall</h1>{" "}
                <div className="foodPicture"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      {hideMain && (
        <MainPage
          onPress3={handleClick3}
          onPress2={handleClick2}
          onPress={handleClick}
        />
      )}
      {showMain && ""}
    </div>
  );
}