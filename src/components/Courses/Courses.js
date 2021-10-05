import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../Course/Course';
import RouteHeader from '../RouteHeader/RouteHeader';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch ('./fakeData.json')
        .then (res => res.json())
        .then (data => setCourses(data))
    }, [])

    return (
        <div>
            <RouteHeader>
                <h1>Courses</h1>
            </RouteHeader>
            <Container>
                <h1 className="text-center title-text">All Courses <i className="d-block fs-6 fw-normal">Just Choice Your Own. We Are Here To Serve You</i></h1>
                <div className="courses">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Courses;