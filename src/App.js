import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
import UserRoutes from "./routes/UserRoutes";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import ProjectView from "./pages/projects/ProjectView";
import About from "./pages/home/AboutUs";
import Services from "./pages/services/Services";
import AddProject from "./pages/admin/AddProjectDetails";
import UnderConstruction from "./pages/under-construction/landing_page/landing_page";


const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<UnderConstruction />}/>
          {/* <Route path="/" element={<Login />}/>*/}
          <Route path="/dashboard" element={<AddProject/>}/>
          <Route path="/home/" element={<UserRoutes/>}>
              <Route index element={<Home/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="projects" element={<Projects/>}/>
              <Route path="projects/projectView" element={<ProjectView/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="services" element={<Services/>}/>
          </Route>
      </Routes>

      {/* After the completeion of the website the above routes should be deleted  */}

      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/projectView" element={<ProjectView/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer /> */}
    </Router>
  );
};

export default App;
