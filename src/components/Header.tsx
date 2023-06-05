import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Chester Lee Coloma</Navbar.Brand>
        <Nav className="me-0">
          <Nav.Link href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link href="#blog">
            Blog
          </Nav.Link>
          <Nav.Link href="#about">
            About
          </Nav.Link>
          <Nav.Link href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
