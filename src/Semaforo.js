import "./Style.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

let Semaforo = () => {
  let [clicked, selectedColor] = useState("red");

  return (
    <>
      <div className="semaforo d-flex flex-column align-items-center justify-content-evenly">
        <div
          className={`light red ${clicked === "red" ? `lightOn` : ""}`}
          onClick={() => selectedColor("red")}
        ></div>
        <div
          className={`light yellow ${clicked === "yellow" ? `lightOn` : ""}`}
          onClick={() => selectedColor("yellow")}
        ></div>
        <div
          className={`light green ${clicked === "green" ? `lightOn` : ""}`}
          onClick={() => selectedColor("green")}
        ></div>
      </div>
    </>
  );
};
//{clicked ? "lightOn" : ""}
export default Semaforo;
