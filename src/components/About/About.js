import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutusImg from '../../image/aboutus.svg';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faPuzzlePiece, faUserTie } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const book = <FontAwesomeIcon icon={faBookOpen} />
    const puzzle = <FontAwesomeIcon icon={faPuzzlePiece} />
    const trainer = <FontAwesomeIcon icon={faUserTie} />

    return (
        <div>
            <Container fluid className="route-header">
                <Container>
                    <h1>About Us</h1>
                </Container>
            </Container>
            <Container>
                <Row>
                    <Col className="me-4">
                        <img className="img-fluid mt-5" src={aboutusImg} alt="" />
                    </Col>
                    <Col className="m-4 ps-5">
                        <h1>Why <span className="primary-color">Educapedia.</span> is special?</h1>
                        <h3 className="mt-4">The act or experience of one who enrolled and did a course properly is just like this, <i>'Makes Learning Fun'</i></h3>
                        <p className=" fs-5 mt-4">
                            We always try our best to improve your courses regularly. Now we have 1000+ world class courses. Many people enrolled those courses and they are satisfied with our services. We ensure you for the best support session. Their are many mentors who are always ready for solving your problem. So dont be late. Enrolled course that you want to do. We are ready to serve you the best. Best Wishes. Thank you. <br />
                            <i className="fs-6 fw-bold">- CEO, Educapedia.</i>
                        </p>
                    </Col>
                </Row>

                {/* about us data (some data showes here for better visualization) */}
                <Row className="mt-5">
                    <Col>
                        <div className="about-us-data">
                            <h1 className="primary-color">100+</h1>
                            <h5 className="text-center">Specialist Good <br /> Teachers</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="about-us-data">
                            <h1 className="primary-color">1000+</h1>
                            <h5 className="text-center">Online Learning <br /> Courses</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="about-us-data">
                            <h1 className="primary-color">76148+</h1>
                            <h5 className="text-center">Online & Offline <br /> Students</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="about-us-data">
                            <h1 className="primary-color">214+</h1>
                            <h5 className="text-center">Special Awards <br /> Winning</h5>
                        </div>
                    </Col>
                </Row>

                {/* services section (services that provided in about us) */}
                <h1 className="title-text text-center">Services We Provide</h1>
                <Row className="mt-5">
                    <Col>
                        <div className="about-us-service">
                            <h1 className="icon primary-color">{book}</h1>
                            <h2>Free Trial Lesson</h2>
                            <p className="fs-5">Here you can enjoy our some of courses without cost. It helps you to get an idea about our courses.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="about-us-service">
                            <h1 className="icon primary-color">{puzzle}</h1>
                            <h2>Learn New Skills</h2>
                            <p className="fs-5">Here are so many courses. So you can always learn new things. And we also working for publish new courses.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="about-us-service">
                            <h1 className="icon primary-color">{trainer}</h1>
                            <h2>Expert trainers</h2>
                            <p className="fs-5">You find here most famous instractor here. Many many expert trainers are here for train you in a proper way.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;