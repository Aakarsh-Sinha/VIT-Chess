import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index.js";
import About from "./pages/about.jsx";
import Articles from "./pages/article.jsx";
import SignUp from "./pages/signup.js";
import Contact from "./pages/contact.js";
import NavbarBoot from "./components/NavbarBootstrap.jsx";

import SouthZonals2024 from "./pages/articles/SouthZonals2024.jsx";

function App() {
  return (
    <Router>
      <NavbarBoot />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<SouthZonals2024 />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
