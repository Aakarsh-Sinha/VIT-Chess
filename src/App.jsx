import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index.js";
import About from "./pages/about.js";
import Blogs from "./pages/blogs.js";
import SignUp from "./pages/signup.js";
import Contact from "./pages/contact.js";
import NavbarBoot from "./components/NavbarBootstrap.jsx";

function App() {
  return (
    <Router>
      <NavbarBoot />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
