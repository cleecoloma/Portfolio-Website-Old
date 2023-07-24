import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Home() {
  const myStyle = {
    backgroundColor: "gray",
    height: "400px"
  }
  return (
    <Container style={myStyle}>
      <h1>Hi, I'm Chester!</h1>
      <h2>
        <p>
          A <span className="text-muted">mechanical engineer</span> turned{" "}
          <span style={{ color: "blue" }}>software developer</span>.
        </p>
      </h2>
      <Button variant="primary">See My Projects</Button>{" "}
      <Button variant="primary">Contact Me</Button>
      <hr />
    </Container>
  );
}

export default Home;
