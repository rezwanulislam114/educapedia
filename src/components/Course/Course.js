import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const Course = (props) => {
    const {name, lecture, img, price, hours, enrolled} = props.course;
    const rocket = <FontAwesomeIcon icon={faRocket} />
    const history = useHistory()

    return (
        <div className="course">
            <img className="course-img" src={img} alt="" />
            <div>
                <h3 className="mt-3">{name}</h3>
                <p className="mb-2 fs-5">Lecture: {lecture}</p>
                <p className="mb-2 fs-5">Total Class Time: {hours} hr</p>
                <p className="mb-2 fs-5">{enrolled} Students Enrolled</p>
                <p className="fs-3 m-0 mb-3">$ {price}</p>
                <button onClick={() => history.push("/courses/registration")} className="btn-regular">Enroll Now <span className="ms-2">{rocket}</span></button>
            </div>
        </div>
    );
};

export default Course;