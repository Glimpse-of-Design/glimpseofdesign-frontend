import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Under_construction from "./pages/under-construction/landing_page/landing_page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Under_construction />}></Route>
      </Routes>

      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes> */}
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
