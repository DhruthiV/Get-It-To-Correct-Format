import React, { useState } from "react";
import { Form, Button, Collapse, Container, Row, Col } from "react-bootstrap";

const OtherSections = ({ onSubmit }) => {
  const [formOpen, setFormOpen] = useState(true); // Default to expanded
  const [formData, setFormData] = useState({
    courseObjectives: "",
    courseOutcomes: "",
    courseOverview: "",
    textbooks: "",
    referenceBooks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send form data to the parent component
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ paddingTop: "10px" }}>
      <Row className="w-100">
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Other Sections</h3>
            <Button
              variant="info"
              onClick={() => setFormOpen(!formOpen)}
              aria-controls="other-sections-form"
              aria-expanded={formOpen}
            >
              {formOpen ? "Shrink" : "Expand"}
            </Button>
          </div>
          <Collapse in={formOpen}>
            <div id="other-sections-form">
              <Form onSubmit={handleFormSubmit}>
                {/* Course Objectives */}
                <Form.Group controlId="courseObjectives">
                  <Form.Label>Course Objectives</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="courseObjectives"
                    value={formData.courseObjectives}
                    onChange={handleChange}
                    placeholder="Enter course objectives"
                  />
                </Form.Group>

                {/* Course Outcomes */}
                <Form.Group controlId="courseOutcomes">
                  <Form.Label>Course Outcomes</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="courseOutcomes"
                    value={formData.courseOutcomes}
                    onChange={handleChange}
                    placeholder="Enter course outcomes"
                  />
                </Form.Group>

                {/* Course Overview */}
                <Form.Group controlId="courseOverview">
                  <Form.Label>Course Overview</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="courseOverview"
                    value={formData.courseOverview}
                    onChange={handleChange}
                    placeholder="Enter course overview"
                  />
                </Form.Group>

                {/* TextBooks */}
                <Form.Group controlId="textbooks">
                  <Form.Label>TextBooks</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="textbooks"
                    value={formData.textbooks}
                    onChange={handleChange}
                    placeholder="Enter textbooks"
                  />
                </Form.Group>

                {/* Reference Books */}
                <Form.Group controlId="referenceBooks">
                  <Form.Label>Reference Books</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="referenceBooks"
                    value={formData.referenceBooks}
                    onChange={handleChange}
                    placeholder="Enter reference books"
                  />
                </Form.Group>
              </Form>
            </div>
          </Collapse>
        </Col>
      </Row>
    </Container>
  );
};

export default OtherSections;
