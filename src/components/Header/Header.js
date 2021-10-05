import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    // active style for navlinks
    const activeStyle = {
        fontWeight: 'bold',
        color: '#ff7120'
    }

    // font awsome icons 
    const graduationCap = <FontAwesomeIcon icon={faGraduationCap} />


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><span className="primary-color fs-1">{graduationCap}</span> <span className="fs-2 fw-bold">Educapedia.</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="navlink" activeStyle={activeStyle} to="/home">Home</NavLink>
                            <NavLink className="navlink" activeStyle={activeStyle} to="/about">About</NavLink>
                            <NavLink className="navlink" activeStyle={activeStyle} to="/courses">Courses</NavLink>
                            <NavLink className="navlink" activeStyle={activeStyle} to="/contact">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;