import React from "react";
import { Container } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";

function Projects() {
  return (
    <Container id="Projects">
      <Figure>
        <Figure.Image 
        width={200}
        height={200}
        alt="200x200"
        src="holder.js/200x200"
        />
      </Figure>
      <h1>Projects</h1>
      <h3>Project #1</h3>
      <h3>Project #2</h3>
      <h3>Project #3</h3>
      <hr />
    </Container>
  );
}

export default Projects;
