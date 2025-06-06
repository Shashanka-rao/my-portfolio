import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import projectsData from '../data/projects.json';

const Projects = () => (
  <div>
    <h2 className="mb-4">Projects</h2>
    <Row>
      {projectsData.map((project, idx) => (
        <Col key={idx} sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <div className="mb-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="badge bg-secondary me-1">{tag}</span>
                ))}
              </div>
              <Button href={project.github} variant="dark" size="sm" className="me-2">GitHub</Button>
              <Button href={project.live} variant="outline-dark" size="sm">Live</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Projects;