import React from "react";
import { Tab, Nav, Col, Row } from "react-bootstrap";
import { FaBeer, FaGamepad, FaHeart, FaMusic, FaMountain } from 'react-icons/fa';
import "../css/Trainings.css";

const Trainings = () => {
  return (
    <div className="container mt-4 col-12">
      <Tab.Container id="left-tabs-example" defaultActiveKey="level1">
        <Row>
          <Col>
            <Nav variant="pills" className="justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="level1">
                  <FaBeer /> Level 1 programming
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="level2">
                  <FaGamepad /> Level 2 programming
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="level3">
                  <FaHeart /> Level 3 programming
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="level4">
                  <FaMusic /> Level 4 programming
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="level5">
                  <FaMountain /> Level 5 programming
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="level1">
                <div className="level-box">
                  <h5>Level 1 Content</h5>
                  <p>Bacon ipsum dolor amet pork prosciutto...</p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="level2">
                <div className="level-box">
                  <h5>Level 2 Content</h5>
                  <p>Venison pork turkey jerky pig...</p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="level3">
                <div className="level-box">
                  <h5>Level 3 Content</h5>
                  <p>Kevin andouille pastrami ham hock sausage...</p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="level4">
                <div className="level-box">
                  <h5>Level 4 Content</h5>
                  <p>Short loin ribeye biltong capicola salami...</p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="level5">
                <div className="level-box">
                  <h5>Level 5 Content</h5>
                  <p>Bresaola pork landjaeger tail jowl...</p>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      
    </div>
  );
};

export default Trainings;
