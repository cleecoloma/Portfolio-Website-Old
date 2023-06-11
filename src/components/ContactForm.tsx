import React from 'react';
import { Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  return (
    <Container>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 mt-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel 
        controlId="floatingText" 
        label="Message"
        className='mb-3'
        >
        <Form.Control as="textarea" placeholder="Leave a message here" />
      </FloatingLabel>
      <Button variant='primary'>Submit</Button>
    </Container>
  );
}

export default ContactForm;
