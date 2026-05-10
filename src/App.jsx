import { BrowserRouter, Routes, Route } from "react-router-dom";
import OSLayout from "./OSLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Founder from "./pages/Founder";
import Products from "./pages/Products";
import Company from "./pages/Company";

export default function App() {
  return (
    <BrowserRouter>
      <OSLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/products" element={<Products />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </OSLayout>
    </BrowserRouter>
  );
}