// SignInForm.js
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import {  useNavigate } from 'react-router-dom';
const SignInForm = () => {
    const [show, setShow] = useState(true);
  
    const navigation=useNavigate();

    const handleClose = () => {
        setShow(false);
        
         navigation('/')
    
      };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formErrors = validateForm();
    //     if (Object.keys(formErrors).length === 0) {
    //       alert('Registration Successful');
    //       handleClose();
    //     } else {
    //       setErrors(formErrors);
    //     }
    //   };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username or Email Address <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control type="email"  required />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control type="password"required />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox" className="mt-3">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <Button variant="primary" size="lg" type="submit" className="mt-3">
            Log In
          </Button>
        </Form>
        <div className="mt-3 d-flex justify-content-between">
          <Link to="/forgot-password" className="reg-sign reg-signn  ">Lost your password?</Link>
          <Link to="/register" className="reg-sign">Don’t have an Account? <span className="reg-sign reg-signn">Register</span></Link>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignInForm;