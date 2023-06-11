import React from "react";
import Button from "react-bootstrap/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Container } from "react-bootstrap";
import ContactForm from "./ContactForm";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Contact</h1>
          <p>Get in touch!</p>
          <p>Email: cleecoloma@gmail.com</p>
          <Button variant="outline-primary">
            <LinkedInIcon />
            <a
              href="https://www.linkedin.com/in/chesterleecoloma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Button>{" "}
          <Button variant="outline-dark">
            <GitHubIcon />
            <a
              href="https://github.com/cleecoloma"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>{" "}
          <Button variant="outline-success">
            <PictureAsPdfIcon />
            <a
              href="https://github.com/cleecoloma"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>{" "}
        </Col>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
