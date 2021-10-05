import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import RouteHeader from '../RouteHeader/RouteHeader';

const Registration = () => {
    return (
        <div>
            <RouteHeader>
                <h1>Registration</h1>
            </RouteHeader>
            <Container>
                <h1 className="text-center title-text">
                    Registration Form
                </h1>
                <Form className="w-50 mx-auto mt-5">
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Form.Control placeholder="Mobile Number" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Email" />
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Form.Control placeholder="Institution Where You Reading" />
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend">
                                Payment Method
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Bkash"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Rocket"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="SureCash"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Mastercard / Visacard"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios4"
                                />
                            </Col>
                        </Form.Group>
                    </Row>
                    <Row className="mt-4">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Row>
                    <Row className="mt-4">
                        <button className="btn-regular w-50 mx-auto">Complete Registration</button>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default Registration;