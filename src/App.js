import "./App.css";
import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [temp, setTemp] = useState(30);
  const [background, setBackground] = useState("rgba(241, 249, 82, 0.9)");

  function tempChange(isIncrease) {
    const newTemp = isIncrease ? temp + 1 : temp - 1;
    setTemp(newTemp);
    if (
      newTemp <= 30 &&
      newTemp >= 25 &&
      background !== "rgba(241, 249, 82, 0.9)"
    )
      setBackground("rgba(241, 249, 82, 0.9)");
    else if (
      newTemp < 25 &&
      newTemp >= 15 &&
      background !== "rgba(28, 109, 97, 0.7)"
    )
      setBackground("rgba(28, 109, 97, 0.7)");
    else if (
      newTemp <= 40 &&
      newTemp > 30 &&
      background !== "rgba(255, 69, 0, .7)"
    )
      setBackground("rgba(255, 69, 0, .7)");
    else if (newTemp <= 50 && newTemp > 40 && background !== "orangered")
      setBackground("orangered");
    else if (
      newTemp < 15 &&
      newTemp >= 0 &&
      background !== "rgba(118, 216, 202, 0.9)"
    )
      setBackground("rgba(118, 216, 202, 0.9)");
    else if (newTemp < 0 && background !== "rgba(197, 249, 241, 0.9)")
      setBackground("rgba(197, 249, 241, 0.9)");
    else if (newTemp > 50 && background !== "rgb(219, 23, 9)")
      setBackground("rgb(219, 23, 9)");
  }
  return (
    <div id="container" style={{ backgroundColor: background }}>
      <div className="top">
        <h1>
          {temp}
          <span>°C</span>
        </h1>
      </div>
      <div className="bottom">
        <Button text={"<"} click={tempChange} />
        <Button text={">"} click={tempChange} />
      </div>
    </div>
  );
};

export default App;
