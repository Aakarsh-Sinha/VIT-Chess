import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index.js";
import Statistics from "./pages/statistics.jsx";
import SignUp from "./pages/signup.js";
import Contact from "./pages/contact.jsx";
import NavbarBoot from "./components/NavbarBootstrap.jsx";
import NationalInterUni2024 from "./pages/articles/NationalInterUni2024.jsx";
import VITCLSchedule from "./pages/vitcl/VITCLSchedule.jsx";
import Points from "./pages/points.jsx";
import Season1 from "./pages/season1.jsx";
import About from "./pages/about.jsx";

function App() {
  return (
    <Router>
      <NavbarBoot />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/VIT-Chess" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<NationalInterUni2024 />} />
        <Route path="/points" element={<Points />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vitcl-schedule" element={<VITCLSchedule />} />
        <Route path="/season1" element={<Season1 />} />
      </Routes>
    </Router>
  );
}

export default App;
