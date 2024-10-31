import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BasicProgramming from "./Components/BasicProgramming";
import Programming from "./Components/Programming";
import Testing from "./Components/Testing";
import Designing from "./Components/Designing";
import CloudTechnology from "./Components/CloudTechnology";
import CardComponent from "./Components/CardComponent";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <h1 className="text-center">Course Content</h1>
       
        <div className="text-center mb-3"> 
        for more info 
          <a
            href="https://forms.gle/z1gSAqkGHUqghwdH8"
            className="btn btn-primary mx-2"
            aria-label="View C Language and Data Structures course content"
          >
            contact us...
          </a>
        </div>
        <Routes>
          <Route path="/" element={<CardComponent />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/basic-programming" element={<BasicProgramming />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/designing" element={<Designing />} />
          <Route path="/cloud-technology" element={<CloudTechnology />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
