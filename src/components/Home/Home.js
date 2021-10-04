import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import homeImg from '../../image/home-img.svg';
import Course from '../Course/Course';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setCourses(data.slice(2, 6)))
    }, []);
    const history = useHistory();
    const rightArrow = <FontAwesomeIcon icon={faAngleRight} />

    return (
        <div>
            <Container className="mt-5 py-5">
                <Row className="align-items-center">
                    <Col>
                        <img className="img-fluid" src={homeImg} alt="" />
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <h1 className="intro-text">Learn Everyday <br /> Any New Skills <br /> with <span className="primary-color">Educapedia</span></h1>
                    </Col>
                </Row>
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
            </Container>
        </div>
    );
};

export default Home;