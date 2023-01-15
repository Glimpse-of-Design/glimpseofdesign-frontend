import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./apis/firebase/firebase-config";

import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import ProjectView from "./pages/projects/ProjectView";
import About from "./pages/home/AboutUs";
import Services from "./pages/services/Services";
import AddProject from "./pages/admin/AddProject";
import Login2 from "./pages/admin/Login2";


const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
      <Router>
        <Routes>
          {/* <Route path="/" element={<UnderConstruction />}/> */}
          {user ? <Route path="/dashboard" element={<AddProject/>}/> : <Route path="/login" element={<Login2/>}/>}

          {/*<Route path="/dashboard" element={<Dashboard />} />*/}
          <Route path="/" element={<UserRoutes/>}>
            <Route index element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="projects/projectView" element={<ProjectView/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="services" element={<Services/>}/>
          </Route>
        </Routes>
    </Router>
  );
};

export default App;
