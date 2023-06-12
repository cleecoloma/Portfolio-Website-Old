import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <Container>
      <h1>Hi, I'm Chester!</h1>
      <h2>
        <p>
          A <span className="text-muted">mechanical engineer</span> turned{" "}
          <span style={{ color: "blue" }}>front-end web developer</span>.
        </p>
      </h2>
      <Button variant="primary">See My Projects</Button>{" "}
      <Button variant="primary">Contact Me</Button>
      <hr />
    </Container>
  );
}

export default Home;
