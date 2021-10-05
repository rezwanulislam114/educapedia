import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import homeImg from '../../image/home-img.svg';
import Course from '../Course/Course';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import aboutIntro from '../../image/about-intro.svg'

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setCourses(data.slice(2, 6)))
    }, []);
    const history = useHistory();

    // font awsome icons 
    const rightArrow = <FontAwesomeIcon icon={faAngleRight} />
    const check = <FontAwesomeIcon icon={faCheckCircle} />
    
    return (
        <div>
            {/* home page intro  */}
            <Container fluid className="py-5 header-home">
                <Row className="align-items-center">
                    <Col className="d-flex justify-content-center mb-5">
                        <h1 className="intro-text">Learn Everyday <br /> Any New Skills <br /> with <span className="primary-color">Educapedia.</span></h1>
                    </Col>
                    <Col>
                        <img className="img-fluid" src={homeImg} alt="" />
                    </Col>
                </Row>
            </Container>

            {/* a little part of about us page  */}
            <Container fluid className="p-5 mt-5 about-intro">
                <Container>
                    <Row>
                        <Col>
                            <img className="w-100" src={aboutIntro} alt="" />
                        </Col>
                        <Col className="mt-3">
                            <h1>Why Choose <span className="primary-color">Educapedia.</span>?</h1>
                            <p>Educapedia is one of the best online educational site. Here you can learn anything as your wishlist. Best instractor are here for teaching you in a great methode. Our main purpose is teach you. Best Wishes for you.</p>
                            <div className="mt-5 ms-5">
                                <h4 className="mt-3"><span className="primary-color me-2">{check}</span> We provide the most famous instractor.</h4>
                                <h4 className="mt-3"><span className="primary-color me-2">{check}</span> We give you the best services.</h4>
                                <h4 className="mt-3"><span className="primary-color me-2">{check}</span> We ensure your academic excellence.</h4>
                                <h4 className="mt-3"><span className="primary-color me-2">{check}</span> You get best support session.</h4>
                                <h4 className="mt-3"><span className="primary-color me-2">{check}</span> We provide you certificate after courses.</h4>
                                <button onClick={() => history.push("/about")} className="btn-regular mt-4">Learn More About Us</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* a little view of courses  */}
            <Container>
                <h1 className="text-center title-text">Explore Our Courses</h1>
                <Row className="mt-5">
                    <div className="courses">
                        {
                            courses.map(course => <Course key={course.id} course={course}></Course>)
                        }
                    </div>
                </Row>
                <button className="btn-regular d-block mx-auto mt-5" onClick={() => history.push('/courses')}>
                    Explore More Courses <span className="ms-2">{rightArrow}</span>
                </button>

                {/* subscribe section  */}
                <Row className="mt-5">
                    <h1 className="text-center mt-5 pt-5">
                        Subscribe our Newsletter & <br /> Get every updates.
                    </h1>
                    <InputGroup className=" w-50 mx-auto m-4">
                        <FormControl placeholder="Email for Notify" />
                        <button className="btn-regular">
                            Subscribe
                        </button>
                    </InputGroup>
                </Row>
            </Container>
        </div>
    );
};

export default Home;