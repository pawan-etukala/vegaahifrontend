import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicprogrammingImage from '../Assests/BasicProgramming.jpg';
import programmingImage from '../Assests/programming.jpg';
import Designing from '../Assests/designing.jpg';
import Testing from '../Assests/testing.jpg';
import Cloud from '../Assests/Cloud.jpg';

const CardComponent = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);

  const handleCardClick = (path) => {
    navigate(path);
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 font-weight-bold">Course Content</h1>
      <div className="position-relative">
        {/* Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className="d-flex overflow-auto px-5"
          style={{
            gap: '16px',
            paddingBottom: '16px',
            scrollbarWidth: 'none', // Hides scrollbar in Firefox
            msOverflowStyle: 'none', // Hides scrollbar in IE and Edge
            position: 'relative', // To position the buttons inside the container
          }}
        >
          {/* For hiding scrollbar in modern browsers */}
          <style>
            {`
              ::-webkit-scrollbar {
                display: none; /* Hides scrollbar for Chrome, Safari, and Opera */
              }
              .card:hover {
                transform: scale(1.05);
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
              }
            `}
          </style>
          {[
            { title: "LEVEL-1 Basic Programming", img: BasicprogrammingImage, path: "/basic-programming", text: "Welcome to the Basic Programming course!" },
            { title: "LEVEL-2 Programming", img: programmingImage, path: "/programming", text: "Welcome to the Programming course!" },
            { title: "LEVEL-3 Designing", img: Designing, path: "/designing", text: "Welcome to the Designing course! Add color to your journey and start blooming like a flower on earth." },
            { title: "LEVEL-4 Testing", img: Testing, path: "/testing", text: "Welcome to the Testing course! Add color to your journey and start blooming like a flower." },
            { title: "LEVEL-5 Cloud Technology", img: Cloud, path: "/cloud-technology", text: "Welcome to the Cloud Technology course!" }
          ].map((card, index) => (
            <div className="card" key={index} style={{ width: '100%', maxWidth: '18rem', flexShrink: 0 }}>
              <img
                src={card.img}
                className="card-img-top"
                alt={card.title}
                style={{
                  height: '160px', // Reduced height to 80% of the original (200px * 0.8)
                  objectFit: 'cover',
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <button onClick={() => handleCardClick(card.path)} className="btn btn-primary mt-auto">
                  See more...
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Left Scroll Button */}
        <button
          className="btn btn-light position-absolute rounded-circle"
          style={{
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            zIndex: 1,
            padding: '10px',
            fontSize: '20px',
            background: 'transparent',
            color: 'blue',
            border: 'none',
          }}
          onClick={() => scroll('left')}
        >
          &lt;
        </button>

        {/* Right Scroll Button */}
        <button
          className="btn btn-light position-absolute rounded-circle"
          style={{
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            zIndex: 1,
            padding: '10px',
            fontSize: '20px',
            background: 'transparent',
            color: 'blue',
            border: 'none',
          }}
          onClick={() => scroll('right')}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
