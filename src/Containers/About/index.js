import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './About.scss';
import AboutUs from '../../Assets/aboutus.jpg';
const AboutPageContainer = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card className="aboutUs">
                            <Card.Body>
                                <Card.Title>About Page</Card.Title>
                                <Card.Text>
                                    I’m a React js developer having almost 1 year of experienced in front-end development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutPageContainer;