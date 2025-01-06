import React, { useState } from 'react';
import { Form, Button, Collapse, Container, Row, Col } from 'react-bootstrap';

const Syllabus = ({ onSubmit }) => {
  const [formOpen, setFormOpen] = useState(true); // Default to expanded
  const [syllabus, setSyllabus] = useState([
    {
      title: 'Java Fundamentals',
      description: 'Object-Oriented Programming, JDK, Data types, Operators, Program control statements - if, switch, for, while. Classes, Objects and Methods, Myths and Facts about Java classes and objects, Constructors, Static and Heap memory, new keyword, Garbage Collection and finalizers, this keyword, Arrays and jagged arrays, Array References, length Member, for loops, for-each, Strings, Command-Line Arguments, Method Overloading, Overloading Constructors, Nested Classes.',
      experientialLearning: 'Problem solving with data types, Loops, Arrays, Garbage Collection, Polymorphism.',
      hours: '16 + 6 Hours'
    },
    {
      title: 'Inheritance and Multithreading',
      description: 'Inheritance, Member Access, Constructors, Method Overriding, Abstract Classes, Exception Handling, Interfaces and Packages, Multithreaded Programming, Thread Communication Using notify(), wait() and notifyAll(), String Handling, Enumeration and Annotations, Wrappers Class.',
      experientialLearning: 'Problem solving with Inheritance, Exception handling, Multi-threading, Annotations.',
      hours: '16 + 6 Hours'
    },
    {
      title: 'JDBC and Servlets',
      description: "JDBC classes and interfaces, Talking to Database, Immediate Solution, Essential JDBC program, Using Prepared Statement Object, Interactive SQL Tool, types of JDBC, JDBC in Action– Result Sets, Batch updates, Mapping, Basic JDBC data types, Advanced JDBC datatypes, Immediate Solutions. Web Application Server, Server Architecture, Servlet Structure, Servlet Creation, Servlet's Lifecycle, Single Thread model interface, Handling Client Request: Form Data, Handling Client Request: HTTP Request Headers, Generating Server Response: HTTP Response Headers, Inter-Servlet communication, Handling Cookies, Session Tracking.",
      experientialLearning: 'Problem solving JDBC, Problem solving using Servlets, Cookies and Sessions.',
      hours: '16 + 8 Hours'
    },
    {
      title: 'JSP, Annotations, Frameworks',
      description: 'Overview of JSP Technology, Need of JSP, Benefits of JSP, Advantages of JSP, Basic Syntax, Invoking Java Code with JSP Scripting Elements, Using JSP expressions, Using Scriplets, Declarations, Creating Packages, JAR files, Annotations, Annotation types, working with Java Bean, Frameworks - Hibernate, Struts, Spring.',
      experientialLearning: 'Working with JSP scripting elements, annotations and creating JAR files.',
      hours: '12 + 4 Hours'
    },
  ]);

  const handleChange = (index, field, value) => {
    const updatedSyllabus = [...syllabus];
    updatedSyllabus[index][field] = value || ""; // Default to empty string
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

                    <Form.Group controlId={`unitHours${index}`} className="form-group">
                      <Form.Label>Unit {index + 1} Hours</Form.Label>
                      <Form.Control
                        type="text"
                        value={unit.hours}
                        onChange={(e) => handleChange(index, 'hours', e.target.value)}
                        placeholder={`Enter Unit ${index + 1} Hours`}
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
