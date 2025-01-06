import React, { useState } from 'react';
import { Form, Button, Collapse, Container, Row, Col } from 'react-bootstrap';

const Syllabus = ({ onSubmit }) => {
  const [formOpen, setFormOpen] = useState(true); // Default to expanded
  const [syllabus, setSyllabus] = useState([
    { title: '', description: '', experientialLearning: '' },
    { title: '', description: '', experientialLearning: '' },
    { title: '', description: '', experientialLearning: '' },
    { title: '', description: '', experientialLearning: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updatedSyllabus = [...syllabus];
    updatedSyllabus[index][field] = value;
    setSyllabus(updatedSyllabus);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(syllabus); // Send syllabus data to parent
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ paddingTop: '10px' }}>
      <Row className="w-100">
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Syllabus</h3>
            <Button
              variant="info"
              onClick={() => setFormOpen(!formOpen)}
              aria-controls="syllabus-form"
              aria-expanded={formOpen}
            >
              {formOpen ? 'Shrink' : 'Expand'}
            </Button>
          </div>
          <Collapse in={formOpen}>
            <div id="syllabus-form">
              <Form onSubmit={handleFormSubmit}>
                {syllabus.map((unit, index) => (
                  <div key={index} className="mb-4">
                    <Form.Group controlId={`unitTitle${index}`} className="form-group">
                      <Form.Label>Unit {index + 1} Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={unit.title}
                        onChange={(e) => handleChange(index, 'title', e.target.value)}
                        placeholder={`Enter Unit ${index + 1} Title`}
                      />
                    </Form.Group>

                    <Form.Group controlId={`unitDescription${index}`} className="form-group">
                      <Form.Label>Unit {index + 1} Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={unit.description}
                        onChange={(e) => handleChange(index, 'description', e.target.value)}
                        placeholder={`Enter Unit ${index + 1} Description`}
                      />
                    </Form.Group>

                    <Form.Group controlId={`unitEL${index}`} className="form-group">
                      <Form.Label>Unit {index + 1} Experiential Learning</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={unit.experientialLearning}
                        onChange={(e) => handleChange(index, 'experientialLearning', e.target.value)}
                        placeholder={`Enter Unit ${index + 1} Experiential Learning`}
                      />
                    </Form.Group>
                  </div>
                ))}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Collapse>
        </Col>
      </Row>
    </Container>
  );
};

export default Syllabus;
