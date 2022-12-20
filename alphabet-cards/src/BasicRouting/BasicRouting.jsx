import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import "./BasicRouting.css";

const BasicRouting = () => {
  return (
    // This is the main parent that houses all the routes in an application.
    <Router>
      {/* Link uses a prop to, this is how we call the link */}
      <nav>
        <Link to='/'>Home</Link>|
        <Link to='about'>About</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>

        {/* Error Page always comes to the bottom */}
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
};

export default BasicRouting;
