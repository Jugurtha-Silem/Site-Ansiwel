import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Actualite from "./Pages/Actualite";
import Video from "./Pages/Video";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actualite" element={<Actualite />} />
        <Route path="/video" element={<Video />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
