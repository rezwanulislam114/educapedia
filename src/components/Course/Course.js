import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {name, lecture, img, price} = props.course;
    const rocket = <FontAwesomeIcon icon={faRocket} />

    return (
        <div className="course">
            <img className="course-img" src={img} alt="" />
            <div>
                <h3 className="mt-3">{name}</h3>
                <p className="m-0">Lecture: {lecture}</p>
                <p className="fs-3 m-0 mb-3">$ {price}</p>
                <button className="btn-regular">Enroll Now <span className="ms-2">{rocket}</span></button>
            </div>
        </div>
    );
};

export default Course;