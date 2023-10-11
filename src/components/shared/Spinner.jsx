import React from "react";
import SpinnerGif from "../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={SpinnerGif}
      alt="Loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
