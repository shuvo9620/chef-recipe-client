import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <h4>About Us</h4>
                        <p>Chef Recipe is a platform that inspires and empowers cooks of all levels to create delicious, healthy meals. Our team of experienced chefs and food enthusiasts shares a wide range of recipes and cooking tips to help you build your skills and confidence in the kitchen.</p>
                    </Col>
                    <Col md={4}>
                        <h4>Contact Us</h4>
                        <p>Ishwardi, Pabna<br />Pabna, Dhaka, Bangladesh<br />Phone: +880 1622222553<br />Email: info@chefrecipe.com</p>
                    </Col>
                    <Col md={4}>
                        <h4>Follow Us</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr className="my-4" />
                <Row>
                    <Col md={12}>
                        <p className="text-center"><small>Copyright &copy; 2023 Chef Recipe</small></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;