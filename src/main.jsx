import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router";

<<<<<<< HEAD
import Home from '../pages/Home.jsx';
import SobreNos from '../pages/SobreNos.jsx';
import Contato from '../pages/Contato.jsx';
=======
import Home from "../pages/Home.jsx";
import SobreNos from "../pages/SobreNos.jsx";
import Servicos from "../pages/Servicos.jsx";
>>>>>>> origin/Tiago

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/sobrenos" element={<SobreNos />} />
<<<<<<< HEAD
        <Route path="/contato" element={<Contato />} />
=======
        <Route path="/servicos" element={<Servicos />} />
>>>>>>> origin/Tiago
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
