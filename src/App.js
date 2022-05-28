import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import MobileNavbar from "./components/MobileNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { MyContext } from "./context";
import Aos from "aos";
import "aos/dist/aos.css";
import Caretaking from "./pages/Caretaking";
import Painting from "./pages/Painting";
import PoolService from "./pages/PoolService";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const location = useLocation();

  const infoRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <MyContext.Provider value={{ infoRef }}>
      <GlobalStyle />
      <Navbar toggle={toggle} dropdown={dropdown} setDropdown={setDropdown} />
      <MobileNavbar
        isOpen={isOpen}
        toggle={toggle}
        dropdown={dropdown}
        setDropdown={setDropdown}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/caretaking" element={<Caretaking />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/pool-service" element={<PoolService />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
