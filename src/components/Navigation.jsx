import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-danger"
      bg="danger"
      variant="danger"
      classname="text-white text-decoration-none"
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="justify-content-end"
          style={{ color: "white", textDecoration: "none" }}
        >
          Happy Cake 🍰
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link
              href="/"
              style={{ color: "white", textDecoration: "none" }}
            >
              🏠 Home
            </Nav.Link>
            <Nav.Link
              href="/contacto"
              style={{ color: "white", textDecoration: "none" }}
            >
              📩 Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

/*import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="danger">
      <Container>
        <Navbar.Brand className="">Happy Cake 🍰</Navbar.Brand>
        <Link to="/" className="text-white text-decoration-none">
          🏠 Home
        </Link>
        <Link to="/planes" className="text-white text-decoration-none">
          🏠 Planes
        </Link>
        <Link to="/contacto" className="text-white text-decoration-none">
          📩 Contacto
        </Link>
      </Container>
    </Navbar>
  );
};
export default Navigation;*/
