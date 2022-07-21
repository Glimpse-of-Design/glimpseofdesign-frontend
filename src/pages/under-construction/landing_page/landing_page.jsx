import React from "react";
import { Link } from "react-router-dom";

import "./landing_page.css";

export default function UnderConstruction() {
  return (
    <div className="Cover">
      <div className="App">
        <div className="page-container">
          <h3>#underconstruction</h3>
          <h1>
            Website
            <br />
            Coming Soon
          </h1>
          <h2>Glimpse of Design</h2>
          <div className="page-grid-container">
            <div class="page-grid-item">
              <h4>Address:</h4>
              <div className="page-text">
                112/34/4, VIP Crescent, Bakmeegaha Road, Athurugiriya.
              </div>
            </div>
            <div class="page-grid-item">
              <h4>Telephone:</h4>
              <div className="page-text">+94 71 766 2323</div>
            </div>
            <div class="page-grid-item">
              <h4>Email:</h4>
              <div className="page-text">glimpseofdesign@gmail.com</div>
            </div>
          </div>
          {/* <Preloader /> */}
        </div>
      </div>
      <div className="page-Link">
        <Link to="home">e</Link>
      </div>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
