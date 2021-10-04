import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import notFoundImg from '../../image/not-found.svg';

const NotFound = () => {
    const history = useHistory()
    
    return (
        <div>
            <Container>
                <Row>
                    <img className="w-50 d-block mx-auto" src={notFoundImg} alt="" />
                    <h1 className="mt-5 text-center">Page Not Found.</h1>
                </Row>
                    <button onClick={() => history.push("/home")} className="btn-regular mx-auto d-block mt-5">Back To Home</button>
            </Container>
        </div>
    );
};

export default NotFound;<h1>404, page not found.</h1>