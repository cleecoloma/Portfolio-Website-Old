import Button from "react-bootstrap/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

function Home() {
  return (
    <div>
      <h1>Hi, I'm Chester!</h1>
      <h2>A front-end web developer.</h2>
      <Button variant="outline-primary">
        <LinkedInIcon />
        LinkedIn
      </Button>{" "}
      <Button variant="outline-dark">
        <GitHubIcon />
        GitHub</Button>{" "}
      <Button variant="outline-success">
        <PictureAsPdfIcon />
        Resume</Button>{" "}
    </div>
  );
}

export default Home;
