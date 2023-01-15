import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import ProjectView from "./pages/projects/ProjectView";
import About from "./pages/home/AboutUs";
import Services from "./pages/services/Services";
import AddProject from "./pages/admin/AddProjectDetails";
import UnderConstruction from "./pages/under-construction/landing_page/landing_page";
import Login from "./pages/admin/Login";
import Login2 from "./pages/admin/Login2";
import Dashboard from "./pages/admin/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<UnderConstruction />}/> */}
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Login2 />} />
        <Route path="/adminl" element={<Login />} />
        <Route path="/dashboard" element={<AddProject />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<UserRoutes />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/projectView" element={<ProjectView />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
