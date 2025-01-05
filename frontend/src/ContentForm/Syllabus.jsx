import React, { useState } from "react";
import { Form, Button, Collapse, Container, Row, Col } from "react-bootstrap";

function Syllabus({ onSubmit }) {
  const [formOpen, setFormOpen] = useState(true); // Default to expanded
  const [formData, setFormData] = useState({
    unit1: "",
    unit1EL: "",
    unit2: "",
    unit2EL: "",
    unit3: "",
    unit3EL: "",
    unit4: "",
    unit4EL: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit(formData); // Send form data to the parent component
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ paddingTop: "10px" }}>
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
              {formOpen ? "Shrink" : "Expand"}
            </Button>
          </div>
          <Collapse in={formOpen}>
            <div id="syllabus-form">
              <Form onSubmit={handleFormSubmit}>
                {/* Unit 1 */}
                <Form.Group className="form-group" controlId="unit1">
                  <Form.Label>Unit 1</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="unit1"
                    value={formData.unit1}
                    onChange={handleChange}
                    placeholder="Enter Unit 1 content"
                  />
                </Form.Group>

                {/* Unit 1 EL */}
                <Form.Group className="form-group" controlId="unit1EL">
                  <Form.Label>Unit 1 EL</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="unit1EL"
                    value={formData.unit1EL}
                    onChange={handleChange}
                    placeholder="Enter Unit 1 EL content"
                  />
                </Form.Group>

                {/* Unit 2 */}
                <Form.Group className="form-group" controlId="unit2">
                  <Form.Label>Unit 2</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="unit2"
                    value={formData.unit2}
                    onChange={handleChange}
                    placeholder="Enter Unit 2 content"
                  />
                </Form.Group>

                {/* Unit 2 EL */}
                <Form.Group className="form-group" controlId="unit2EL">
                  <Form.Label>Unit 2 EL</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="unit2EL"
                    value={formData.unit2EL}
                    onChange={handleChange}
                    placeholder="Enter Unit 2 EL content"
                  />
                </Form.Group>

                {/* Unit 3 */}
                <Form.Group className="form-group" controlId="unit3">
                  <Form.Label>Unit 3</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="unit3"
                    value={formData.unit3}
                    onChange={handleChange}
                    placeholder="Enter Unit 3 content"
                  />
                </Form.Group>

                {/* Unit 3 EL */}
                <Form.Group className="form-group" controlId="unit3EL">
                  <Form.Label>Unit 3 EL</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="unit3EL"
                    value={formData.unit3EL}
                    onChange={handleChange}
                    placeholder="Enter Unit 3 EL content"
                  />
                </Form.Group>

                {/* Unit 4 */}
                <Form.Group className="form-group" controlId="unit4">
                  <Form.Label>Unit 4</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="unit4"
                    value={formData.unit4}
                    onChange={handleChange}
                    placeholder="Enter Unit 4 content"
                  />
                </Form.Group>

                {/* Unit 4 EL */}
                <Form.Group className="form-group" controlId="unit4EL">
                  <Form.Label>Unit 4 EL</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="unit4EL"
                    value={formData.unit4EL}
                    onChange={handleChange}
                    placeholder="Enter Unit 4 EL content"
                  />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </div>
          </Collapse>
        </Col>
      </Row>
    </Container>
  );
}

export default Syllabus;
