import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './ContactUs.css';
import introImg from '../../image/contactus-intro.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import formImage from '../../image/form-contactus.svg'
import Button from '@restart/ui/esm/Button';


const ContactUs = () => {
    const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const email = <FontAwesomeIcon icon={faEnvelopeOpen} />

    return (
        <div>
            <Container fluid className="route-header">
                <Container>
                    <h1>Contact Us</h1>
                </Container>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col className="me-4">
                        <img className="img-fluid mt-5" src={introImg} alt="" />
                    </Col>
                    <Col className="m-4 ps-5">
                        <h1 className="text-center mt-0 title-text">Get In Touch With Us</h1>
                        <div className="ms-5 mt-5">
                            <div className="contactus-item">
                                <h2 className="fs-1 primary-color me-4">{map}</h2>
                                <h4>House: 46, Road: 5/A, Sector: 7 <br /> Uttara, Dhaka-1230</h4>
                            </div>
                            <div className="contactus-item">
                                <h2 className="fs-2 primary-color me-4">{phone}</h2>
                                <h4>+8801785998429 <br /> +01852877996</h4>
                            </div>
                            <div className="contactus-item">
                                <h2 className="fs-2 primary-color me-4">{email}</h2>
                                <h4>info@educapedia.com</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h1 className="text-center mt-0 title-text">Contact Us</h1>
                        <div>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Your Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your Email" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="Write Your Address Here" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="ControlTextarea">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} />
                                </Form.Group>

                                <Button className="btn-regular" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col>
                        <img className="d-block mx-auto w-75 p-5" src={formImage} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;