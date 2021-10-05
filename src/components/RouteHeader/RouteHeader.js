import React from 'react';
import { Container } from 'react-bootstrap';
import './RouteHeader.css'

const RouteHeader = (props) => {
    const title = props.children
    return (
        <div>
            <Container fluid className="route-header">
                <Container>
                    {title}
                </Container>
            </Container>
        </div>
    );
};

export default RouteHeader;