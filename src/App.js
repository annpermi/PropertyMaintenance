import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ScrollToTop from "./ScrollToTop";
import { MyContext } from "./context";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const infoRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MyContext.Provider value={{ infoRef }}>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
