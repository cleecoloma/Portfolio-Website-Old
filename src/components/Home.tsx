import Button from "react-bootstrap/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
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
    </Container>
  );
}

export default Home;
