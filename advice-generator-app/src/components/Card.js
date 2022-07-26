import "./Card.css";
import { useState, useEffect } from "react";
import Dice from "../images/icon-dice.svg";

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

  return (
    <div className="card">
      <p className="advice-id">
        {" "}
        advice {" #"}
        {Advice.id || ""}
      </p>
      <q className="advice">{Advice.advice || ""}</q>
      <button className="dice" onClick={() => setClick(!Click)}>
        <img src={Dice} alt="another advice" className="dice-img" />
      </button>
    </div>
  );
}

export default Card;
