import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BasicProgramming from "./Components/BasicProgramming";
import Programming from "./Components/Programming";
import Testing from "./Components/Testing";
import Designing from "./Components/Designing";
import CloudTechnology from "./Components/CloudTechnology";
import CardComponent from "./Components/CardComponent";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import ContactUs from "./Components/ContactUs";
import Services from "./Components/Services";
import AboutUs from "./Components/AboutUs";
import Trainings from "./Components/Trainings";
import AcadamicProjects from "./Components/AcadamicProjects";
import Internship from "./Components/Internship";
import LifeAtVegaahi from "./Components/LifeAtVegaahi";
import Carriers from "./Components/Carriers";
import EducationalClinets from "./Components/EducationalClinets";
import Developmentclients from "./Components/DevelopmentClients";
import AcadamicProjectCard from "./Components/AcadamicProjectCard";


// import CarouselComponent from "./Components/CarouselComponent";
// import Testimonial from "./Components/Testimonial";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
     
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/basic-programming" element={<BasicProgramming />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/designing" element={<Designing />} />
          <Route path="/cloud-technology" element={<CloudTechnology />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="services" element={<Services />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="trainings" element={<Trainings/>} />
          <Route path="acadamicprojects" element={<AcadamicProjects/>} />
          <Route path="internships" element={<Internship/>} />
          <Route path="carries" element={<Carriers/>} />
          <Route path="lifeatvegaahi" element={<LifeAtVegaahi/>} />
          <Route path="educationalclients" element={<EducationalClinets/>} />
          <Route path="developmentclients" element={<Developmentclients/>} />
          
        </Routes>
        
       
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
