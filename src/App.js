import "./App.css";
import { Navbar } from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contect from "./Pages/Contect";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contect" element={<Contect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
