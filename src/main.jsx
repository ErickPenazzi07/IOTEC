import  React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route} from "react-router";

import SobreNos from '../pages/SobreNos.jsx';


createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sobrenos" element={<SobreNos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
