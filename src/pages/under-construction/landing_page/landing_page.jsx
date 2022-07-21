import React from "react";
import { Link } from "react-router-dom";

import "./landing_page.css";

export default function UnderConstruction() {
  return (
    <div className="Cover">
      <div className="App">
        <div className="container">
          <h3>#underconstruction</h3>
          <h1>
            Website
            <br />
            Coming Soon
          </h1>
          <h2>Glimpse of Design</h2>
          <div className="grid-container">
            <div class="grid-item">
              <h4>Address:</h4>
              <div className="text">
                112/34/4, VIP Crescent, Bakmeegaha Road, Athurugiriya.
              </div>
            </div>
            <div class="grid-item">
              <h4>Telephone:</h4>
              <div className="text">+94 71 766 2323</div>
            </div>
            <div class="grid-item">
              <h4>Email:</h4>
              <div className="text">glimpseofdesign@gmail.com</div>
            </div>
          </div>
          {/* <Preloader /> */}
        </div>
      </div>
      <div className="Link">
        <Link to="home">e</Link>
      </div>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
