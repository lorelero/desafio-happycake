import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="danger" variant="danger" className="bg-body-danger">
      <Container>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="text-white">
            🏠 Home
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto" className="text-white">
            📩 Contacto
          </Nav.Link>
        </Nav>
        <Navbar.Brand as={Link} to="/" className="ml-auto text-white">
          Happy Cake 🍰
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigation;
