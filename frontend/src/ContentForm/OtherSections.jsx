import React, { useState } from 'react';
import { Form, Button, Collapse, Container, Row, Col } from 'react-bootstrap';
import "../App.css"
function OtherSections({ onSubmit }) {
  const [formOpen, setFormOpen] = useState(true);
  const [formData, setFormData] = useState({
    courseCode: '',
    courseTitle: '',
    credits: '',
    objectives: '',
    outcomes: '',
    overview: '',
    textbooks: '',
    references: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Other Sections</h3>
            <Button variant="info" onClick={() => setFormOpen(!formOpen)}>
              {formOpen ? 'Shrink' : 'Expand'}
            </Button>
          </div>
          <Collapse in={formOpen}>
            <Form>
              <Form.Group className="form-group" controlId="courseCode">
                <Form.Label>Course Code</Form.Label>
                <Form.Control type="text" name="courseCode" value={formData.courseCode} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="form-group" controlId="courseTitle">
                <Form.Label>Course Title</Form.Label>
                <Form.Control type="text" name="courseTitle" value={formData.courseTitle} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="form-group" controlId="credits">
                <Form.Label>Credits</Form.Label>
                <Form.Control type="text" name="credits" value={formData.credits} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="form-group" controlId="objectives">
                <Form.Label>Course Objectives</Form.Label>
                <Form.Control as="textarea" rows={3} name="objectives" value={formData.objectives} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="form-group" controlId="outcomes">
                <Form.Label>Course Outcomes</Form.Label>
                <Form.Control as="textarea" rows={3} name="outcomes" value={formData.outcomes} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="form-group" controlId="overview">
                <Form.Label>Course Overview</Form.Label>
                <Form.Control as="textarea" rows={3} name="overview" value={formData.overview} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="form-group" controlId="textbooks">
                <Form.Label>Textbooks</Form.Label>
                <Form.Control as="textarea" rows={3} name="textbooks" value={formData.textbooks} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="form-group" controlId="references">
                <Form.Label>References</Form.Label>
                <Form.Control as="textarea" rows={3} name="references" value={formData.references} onChange={handleChange} />
              </Form.Group>

              <Button variant="primary" type="button" onClick={handleFormSubmit}>Submit</Button>
            </Form>
          </Collapse>
        </Col>
      </Row>
    </Container>
  );
}

export default OtherSections;
