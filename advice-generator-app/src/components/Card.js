import "./Card.css";
import { useState, useEffect } from "react";
import Dice from "../images/icon-dice.svg";
import DividerMobile from "../images/pattern-divider-mobile.svg";
import DividerDesktop from "../images/pattern-divider-desktop.svg";
import { CircularProgress, Backdrop, Button } from "@mui/material";

const advice = () => {};
advice();
// console.log(advice());

function Card() {
  const [Advice, setAdvice] = useState("");
  const [Click, setClick] = useState(false);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then(({ slip: data }) => setAdvice(data));
  }, [Click]);

  //   const Advice = {
  //     id: 117,
  //     advice:
  //       "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  //   };

  return (
    <div className="card">
      <p className="advice-id">
        {" "}
        advice {" #"}
        {Advice.id || ""}
      </p>
      {Advice ? (
        <q className="advice">{Advice.advice}</q>
      ) : (
        <>
          <Backdrop sx={{ color: "hsl(218, 23%, 16%)", zIndex: 2 }} open={true}>
            <CircularProgress sx={{ color: "hsl(217, 19%, 38%)" }} />
          </Backdrop>
        </>
      )}
      <div>
        <picture>
          <source
            media="(min-width: 380px)"
            srcSet={DividerDesktop}
            className="divider"
          />
          <img src={DividerMobile} alt="divider-mobile" className="divider" />
        </picture>
        {/* <img src={DividerMobile} alt="divider" className="divider" /> */}
      </div>
      <button
        className="dice"
        onClick={() => {
          setAdvice("");
          setClick(!Click);
        }}
      >
        <img src={Dice} alt="another advice" className="dice-img" />
      </button>
    </div>
  );
}

export default Card;
