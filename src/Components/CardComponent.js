import React from 'react';
import { useNavigate } from 'react-router-dom';
import BasicprogrammingImage from '../Assests/BasicProgramming.jpg';
import programmingImage from '../Assests/programming.jpg';
import Designing from '../Assests/designing.jpg';
import Testing from '../Assests/testing.jpg';
import Cloud from '../Assests/Cloud.jpg';

const CardComponent = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {[
          { title: "LEVEL-1 Basic Programming", img: BasicprogrammingImage, path: "/basic-programming", text: "Welcome to the Basic Programming course!" },
          { title: "LEVEL-2 Programming", img: programmingImage, path: "/programming", text: "Welcome to the Programming course!" },
          { title: "LEVEL-3 Designing", img: Designing, path: "/designing", text: "Welcome to the Designing course! Add color to your journey and start blooming like a flower on earth." },
          { title: "LEVEL-4 Testing", img: Testing, path: "/testing", text: "Welcome to the Testing course! Add color to your journey and start blooming like a flower." },
          { title: "LEVEL-5 Cloud Technology", img: Cloud, path: "/cloud-technology", text: "Welcome to the Cloud Technology course!" }
        ].map((card, index) => (
          <div className="col-md-3 col-sm-6 mb-4 d-flex align-items-stretch" key={index}>
            <div className="card h-100" style={{ minWidth: '100%', maxWidth: '100%' }}>
              <img src={card.img} className="card-img-top" alt={card.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <button onClick={() => handleCardClick(card.path)} className="btn btn-primary mt-auto">
                  See more...
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
