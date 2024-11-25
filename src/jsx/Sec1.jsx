import React from 'react'
// import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Cour_1 from './Cour_1';
import  { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './../css/Cour_1.css';
import carousel1 from './../img/carousel-1.jpg'
import carousel2 from './../img/carousel-2.jpg'


const Sec1 = () => {
  const [index, setIndex] = useState(0); // Carousel active index

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleBookNow = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3); // Moves to the next slide
  };

  return (
    <div className='carousel-background pb-5'>
    <Carousel interval={20000} controls={false} indicators className="carousel-custom">

       
        <Carousel.Item className='carouel-1'>
            <img
                className="d-block w-100"
                src={carousel1}
                alt="First slide"
            />
            <Carousel.Caption>
            <h2 className="mb-4">CONTINUE CAR RESERVATION</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Select Your Car Type</Form.Label>
            <Form.Control as="select">
              <option>Select Your Car Type</option>
              <option>SUV</option>
              <option>Sedan</option>
              <option>Truck</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pick Up</Form.Label>
            <Form.Control type="text" placeholder="Enter a City or Airport" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Need a Different Drop-off Location?</Form.Label>
            <Form.Control type="text" placeholder="Enter a City or Airport" />
          </Form.Group>
          <div className="d-flex mb-3">
            <Form.Group className="me-3" style={{ width: "50%" }}>
              <Form.Label>Pick Up Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group style={{ width: "50%" }}>
              <Form.Label>Pick Up Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
          </div>
          <div className="d-flex mb-3">
            <Form.Group className="me-3" style={{ width: "50%" }}>
              <Form.Label>Drop Off Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group style={{ width: "50%" }}>
              <Form.Label>Drop Off Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
          </div>
          <Button
            variant="warning"
            size="lg"
            className="w-100"
            onClick={handleBookNow}
          >
            Book Now
          </Button>
        </Form>
            </Carousel.Caption>
        </Carousel.Item>

       
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={carousel2}
                alt="Second slide"
            />
            <Carousel.Caption>
                <div className='caption-for-carousel'>
                    <h5 className='h5-content'>BEST ONLINE COURSES</h5>
                    <h1 className='h1-content'>Best Online Learning<br /> Platform</h1>
                    <Button variant="primary">Learn More</Button>
                </div>
            </Carousel.Caption>
        </Carousel.Item>

       
        
    </Carousel>
</div>

  );
};

export default Sec1