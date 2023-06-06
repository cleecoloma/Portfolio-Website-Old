import { Container } from "react-bootstrap";

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
      <hr />
    </Container>
  );
}

export default Home;
