import React, { useRef, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";


export default function Register() {
  const titleRef = useRef();
  const urlRef = useRef();
  const contentRef = useRef();

  const handleSubmit =()=> {
    console.log(titleRef)
  }
 
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="w-50" style={{ maxwidth: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">New Blog</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group id="title">
              <Form.Control type="text" ref={titleRef} required placeholder="Title *" />
            </Form.Group>
            <Form.Group id="url">
              <Form.Control type="text" ref={urlRef} required placeholder="Image URL *"/>
            </Form.Group>
            <Form.Group id="content">
              <Form.Control style={{height:"100px"}}type="text" ref={contentRef} required placeholder="Content *"/>
            </Form.Group>
            <Button  className="w-100" type="submit">
              SUBMIT
            </Button>
          </Form>
         
        </Card.Body>

      </Card>
    </Container>
  );
}
