//
//
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SecurePage = () => {
    return (
        <Container>
            <Row>
                <Col className="col-md-6 mx-auto">
                    <h1>Welcome to the Protected Page</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default SecurePage;