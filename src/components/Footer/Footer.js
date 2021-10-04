import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Container fluid className="footer-backgound">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="primary-color">Educapedia.</h2>
                            <p>This is the best online education site for learners who really want to learn something. We are really proude of you for getting you as a student. Best wishes from us. Keep continue your learning.</p>
                        </Col>
                        <Col className="contact-us-footer ps-5">
                            <h4 className="mb-4">Contact Us</h4>
                            <p>info@educapedia.con</p>
                            <p>+8801785998429 <br />
                            +8801852877996</p>
                            <p> House: 46, Road: 5/A, Sector: 7 <br /> 
                            Uttara, Dhaka-1230</p>
                        </Col>
                        <Col className="ps-5">
                            <h4 className="mb-4">Quick Links</h4>
                            <NavLink className="navlink-footer" to="/home">Home</NavLink>
                            <NavLink className="navlink-footer" to="/about">About</NavLink>
                            <NavLink className="navlink-footer" to="/courses">Courses</NavLink>
                            <NavLink className="navlink-footer" to="/home">Home</NavLink>
                        </Col>
                        <Col className="features-footer">
                            <h4 className="mb-4">Features</h4>
                            <p>Latest News</p>
                            <p>Testimonials</p>
                            <p>Insctractors</p>
                            <p>Help Center</p>
                        </Col>
                    </Row>
                    <p className="text-center mt-5 mb-0">Copyright@ 2021 <span className="fw-bold">Educapedia.</span> All Rights Reserved</p>
                </Container>
            </Container>
        </div>
    );
};

export default Footer;