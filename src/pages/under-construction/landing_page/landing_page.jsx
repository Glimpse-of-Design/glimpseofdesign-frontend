import React from "react";
import ReactDOM from "react-dom";
// import Preloader from "./components/Preloader/Preloader";

import "./landing_page.css";

export default function Under_construction() {
  return (
    <div className="App">
      <div className="container">
        <h3>#underconstruction</h3>
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <div className="grid-container">
          <div class="grid-item">
            <h5>Address:</h5>112/34/4, VIP Crescent, Bakmeegaha Road,
            Athurugiriya.
          </div>
          <div class="grid-item">
            <h5>Telephone:</h5>+94 71 766 2323
          </div>
          <div class="grid-item">
            <h5>Email:</h5>glimpseofdesign@gmail.com
          </div>
        </div>
        {/* <Preloader /> */}
      </div>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
