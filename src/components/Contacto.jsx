import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario aquí
  };

  return (
    <Container>
      <Row>
        <Col sm={12} className="text-center">
        <h3 style={{ fontFamily: 'Arial', fontWeight: 'normal' }}>Cuéntanos, ¿en qué te podemos ayudar?</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="text-center">
        <h5 style={{ fontFamily: 'Arial', fontWeight: 'normal' }}>Correo electrónico:</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="text-center">
          <h5>Descripción:</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Form.Group controlId="description">
            <Form.Control
              as="textarea"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="text-center">
          <Button variant="danger" type="submit">
            Enviar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
