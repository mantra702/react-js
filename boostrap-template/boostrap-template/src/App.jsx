import React from "react";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MaterialKitClone() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Mantra Tilva</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="bg-light text-center py-5">
        <Container>
          <h1 className="display-4 mb-3">Welcome To React-Bootstrap-Template</h1>
          <p className="lead mb-4">A modern React UI Kit based on React-Bootstrap</p>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="text-center py-5" id="features">
        <Row>
          <Col md={4}>
           
          </Col>
          <Col md={4}>
          </Col>
          <Col md={4}>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-bg-primary text-center py-3">
        <p className="mb-0">&copy; 2025 Created By Mantra Tilva</p>
      </footer>
    </>
  );
}
