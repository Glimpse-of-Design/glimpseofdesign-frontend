import { HomeIcon } from "@heroicons/react/outline";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
import UserRoutes from "./routes/UserRoutes";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import ProjectView from "./pages/projects/ProjectView";
import UnderConstruction from "./pages/under-construction/landing_page/landing_page";
import About from "./pages/home/AboutUs";
import Services from "./pages/services/Services";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UnderConstruction />}></Route>
        <Route path="/home" element={<UserRoutes />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/projectView" element={<ProjectView/>} />
          <Route path="about" element={<About/>} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>

      {/* After the completeion of the website the above routes should be deleted  */}

      {/* <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer /> */}
    </Router>
  );
};

export default App;
