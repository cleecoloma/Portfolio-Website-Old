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
        LinkedIn
      </Button>{" "}
      <Button variant="outline-dark">
        <GitHubIcon />
        GitHub
      </Button>{" "}
      <Button variant="outline-success">
        <PictureAsPdfIcon />
        Resume
      </Button>{" "}
    </Container>
  );
}

export default Home;
