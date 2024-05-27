import React from "react";
import Icon from "./icon";
import ReactDOM from "react-dom";

const Card = (props) => {
  return (
    <div className="container text-center d-flex">
      <div className="row bg-dark">
        <div className="col bg-dark m-5 border border-light custom-border">
          <div className="pt-4">
            <Icon />
          </div>
        </div>
        <div
          className="six col bg-dark m-5 border border-light custom-border text-color text-center"
          style={{ fontSize: "100px" }}
        >
          {props.numberSix}
        </div>
        <div
          className="four col bg-dark m-5 border border-light custom-border text-color text-center"
          style={{ fontSize: "100px" }}
        >
          {props.numberFive}
        </div>
        <div
          className="four col bg-dark m-5 border border-light custom-border text-color text-center"
          style={{ fontSize: "100px" }}
        >
          {props.numberFour}
        </div>
        <div
          className="three col bg-dark m-5 border border-light custom-border text-color text-center"
          style={{ fontSize: "100px" }}
        >
          {props.numberThree}
        </div>
        <div
          className="two col bg-dark m-5 border border-light custom-border text-color text-center"
          style={{ fontSize: "100px" }}
        >
          {props.numberTwo}
        </div>
        <div
          className="one col bg-dark m-5 border border-light custom-border text-color text-center"
          style={{ fontSize: "100px" }}
        >
          {props.numberOne}
        </div>
      </div>
    </div>
  );
};
let counter = 0;

const updateCounter = () => {
  const numberOne = Math.floor(counter / 1) % 10;
  const numberTwo = Math.floor(counter / 10) % 10;
  const numberThree = Math.floor(counter / 100) % 10;
  const numberFour = Math.floor(counter / 1000) % 10;
  const numberFive = Math.floor(counter / 10000) % 10;
  const numberSix = Math.floor(counter / 100000) % 10;

  ReactDOM.render(
    <Card
      numberOne={numberOne}
      numberTwo={numberTwo}
      numberThree={numberThree}
      numberFour={numberFour}
      numberFive={numberFive}
      numberSix={numberSix}
    />,
    document.getElementById("app"),
  );

  counter++;
};

setInterval(updateCounter, 1000);
export default Card;
