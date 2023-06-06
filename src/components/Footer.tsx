import { Container } from 'react-bootstrap';


function Footer() {
    const year = new Date().getFullYear();
  return (
    <Container>
      <hr />
      <p>Made by Chester Lee Coloma {year}</p>
    </Container>
  );
}

export default Footer
