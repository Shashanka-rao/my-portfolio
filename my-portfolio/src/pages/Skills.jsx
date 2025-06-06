import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import skillsData from '../data/skills.json';

const Skills = () => (
  <div>
    <h2 className="mb-4">Skills</h2>
    {Object.entries(skillsData).map(([category, skills]) => (
      <div key={category} className="mb-4">
        <h5>{category}</h5>
        <Row>
          {skills.map((skill, idx) => (
            <Col key={idx} sm={6} md={4} lg={3} className="mb-2">
              <Card body>{skill}</Card>
            </Col>
          ))}
        </Row>
      </div>
    ))}
  </div>
);

export default Skills;