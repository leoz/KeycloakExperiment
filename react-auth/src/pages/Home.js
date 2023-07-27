//
//
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col className="col-md-5 mx-auto">
                    <h1>Welcome to the Homepage</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;