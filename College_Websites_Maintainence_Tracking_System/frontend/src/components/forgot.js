import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import "./login.css";
function Forgot(){
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              <br />
              <Form.Label>Enter password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
              />
              <br />
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                autoFocus
              />
              <br />
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="password"
                placeholder="OTP"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
export default Forgot;