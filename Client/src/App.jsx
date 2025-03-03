import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DonateDashboard from "../src/Pages/DonateDashboard";
import Contact from "../src/Pages/ContactUS";
import About from "../src/Pages/AboutUs";

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/donate" element={<DonateDashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
