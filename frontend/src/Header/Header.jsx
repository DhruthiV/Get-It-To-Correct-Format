import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <Container fluid className="bg-primary py-2">  {/* Reduced padding from py-5 to py-4 */}
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 className="text-white">ReStructure Old Syllabus</h1>
          <p className="text-white-50" style={{ fontSize: '1.1rem' }}>
            Revamping the syllabus to make it more organized and student-friendly.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
