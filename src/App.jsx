import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
//import Contact from "./Pages/Contact";
import ContactForm from "./Components/ContactForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}
