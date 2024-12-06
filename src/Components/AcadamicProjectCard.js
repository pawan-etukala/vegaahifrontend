import React from 'react';
import { FaLaptop, FaMobileAlt, FaDatabase, FaBrain } from 'react-icons/fa'; 
import { motion } from 'framer-motion'; // Import motion from framer-motion
import '../css/AcadamicProjectCard.css';

const AcademicProjectCard = () => {
  // Define motion variants for animations (e.g., fade-in or slide-up)
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Function for handling the "See More" button click (example of logging the category)
  const handleSeeMore = (category) => {
    console.log(`See more about ${category}`);
    // You could redirect or open a modal here
  };

  return (
    <div className="container">
      <h2 className="text-center m-4">Academic Projects</h2>
      <div className="row">
        {/* Web Development Card */}
        <div className="col-md-4 col-xl-3">
          <motion.div
            className="cardd bg-c-blue order-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="cardd-block text-center">
              <FaLaptop className="icon" />
              <h6 className="m-b-20">WEB DEVELOPMENT</h6>
              <p className="m-b-0">Completed Projects</p>
              <button className="btn btn-primary mt-3" onClick={() => handleSeeMore('Web Development')}>
                See More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile Development Card */}
        <div className="col-md-4 col-xl-3">
          <motion.div
            className="cardd bg-c-green order-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="cardd-block text-center">
              <FaMobileAlt className="icon" />
              <h6 className="m-b-20">MOBILE DEVELOPMENT</h6>
              <p className="m-b-0">Completed Projects</p>
              <button className="btn btn-success  bg-opacity-50 mt-3" onClick={() => handleSeeMore('Mobile Development')}>
                See More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Data Science Card */}
        <div className="col-md-4 col-xl-3">
          <motion.div
            className="cardd bg-c-yellow order-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="cardd-block text-center">
              <FaDatabase className="icon" />
              <h6 className="m-b-20">DATA SCIENCE</h6>
              <p className="m-b-0">Completed Projects</p>
              <button className="btn btn-warning  bg-opacity-25 mt-3" onClick={() => handleSeeMore('Data Science')}>
                See More
              </button>
            </div>
          </motion.div>
        </div>

        {/* AI & ML Card */}
        <div className="col-md-4 col-xl-3">
          <motion.div
            className="cardd bg-c-pink order-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="cardd-block text-center">
              <FaBrain className="icon" />
              <h6 className="m-b-20">AI & ML</h6>
              <p className="m-b-0">Completed Projects</p>
              <button className="btn btn-danger   mt-3" onClick={() => handleSeeMore('AI & ML')}>
                See More
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="display-4 text-primary mb-4">Academic Projects</h2>
            <p className="lead text-muted">
              We provide hands-on academic projects that train students to solve real-world problems. Our protocol-based applications leverage the latest technologies, ensuring students gain practical experience and industry-relevant skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicProjectCard;
