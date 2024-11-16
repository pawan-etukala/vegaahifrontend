import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BasicProgramming from "./Components/BasicProgramming";
import Programming from "./Components/Programming";
import Testing from "./Components/Testing";
import Designing from "./Components/Designing";
import CloudTechnology from "./Components/CloudTechnology";
import CardComponent from "./Components/CardComponent";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CardComponent />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/basic-programming" element={<BasicProgramming />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/designing" element={<Designing />} />
          <Route path="/cloud-technology" element={<CloudTechnology />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
