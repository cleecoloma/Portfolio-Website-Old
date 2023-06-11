import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  return (
    <Container id="Projects">
      <h1>Projects</h1> {/* I plan to map each projects once it is populated*/}
      <Row>
        <Col>
          <Card style={{ width: "24rem" }}>
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/237/900/700"
            />
            <Card.Body>
              <Card.Title>Project #1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum curabitur vitae nunc sed velit dignissim sodales ut
                eu. Diam donec adipiscing tristique risus nec. Nibh venenatis
                cras sed felis eget velit aliquet sagittis id. Facilisis mauris
                sit amet massa.
              </Card.Text>
              <Row>
                <Col>
                  <Button variant="primary">Live Demo</Button>
                </Col>
                <Col>
                  <Button variant="primary">See Code</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "24rem" }}>
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/237/900/700"
            />
            <Card.Body>
              <Card.Title>Project #2</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum curabitur vitae nunc sed velit dignissim sodales ut
                eu. Diam donec adipiscing tristique risus nec. Nibh venenatis
                cras sed felis eget velit aliquet sagittis id. Facilisis mauris
                sit amet massa.
              </Card.Text>
              <Row>
                <Col>
                  <Button variant="primary">Live Demo</Button>
                </Col>
                <Col>
                  <Button variant="primary">See Code</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "24rem" }}>
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/237/900/700"
            />
            <Card.Body>
              <Card.Title>Project #3</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Elementum curabitur vitae nunc sed velit dignissim sodales ut
                eu. Diam donec adipiscing tristique risus nec. Nibh venenatis
                cras sed felis eget velit aliquet sagittis id. Facilisis mauris
                sit amet massa.
              </Card.Text>
              <Row>
                <Col>
                  <Button variant="primary">Live Demo</Button>
                </Col>
                <Col>
                  <Button variant="primary">See Code</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default Projects;
