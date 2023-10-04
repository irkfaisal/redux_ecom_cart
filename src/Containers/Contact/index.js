
import Card from 'react-bootstrap/Card';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Contact.scss';
import ContactUs from '../../Assets/contactus.jpg';

const ContactPageContainer = () => {
    const myData = [
        { name: 'Linkedin', link: 'https://www.linkedin.com/in/irkfaisal/', text: 'Connect with me on linkedin.' },
        { name: 'GitHub', link: 'https://github.com/irkfaisal/', text: 'Follow to my github account.' },
        { name: 'GitLab', link: 'https://gitlab.com/irkfaisal', text: 'Follow to my gitlab account.' },
        { name: 'Email', link: 'mailto:irkfaisal@gmail.com', text: 'write to me a mail' }
    ]
    return (
        <div className='contactWrap'>
            <Container>
                <Row>
                    <Col>
                        <Card className="aboutUs">
                            <Card.Img variant="top" src={ContactUs} />
                            <Card.Body>
                                <Card.Title>Contact Page</Card.Title>
                                <Card.Text>
                                    <p>CONNECT WITH US</p>
                                    <h1>Get in Touch</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                </Row>
                <Row>
                    <Col>
                        <ListGroup className='contactList'>
                            {
                                myData && myData.length > 0 ? myData.map((item) => {
                                    return (
                                        <ListGroup.Item key={item.name}>
                                            <span>{item.text}</span>
                                            <a href={item.link} rel="noreferrer" target="_blank">
                                                {item.link}
                                            </a>
                                        </ListGroup.Item>
                                    )
                                }) : ''
                            }

                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactPageContainer;