import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1 className='text-center'>Login</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <div className='text-center mt-4'>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </div>

                        <hr />

                        <Button className='me-4' variant="danger" href="/auth/google">
                            <FontAwesomeIcon icon={faGoogle} />
                            Sign in with Google
                        </Button>

                        <Button variant="dark" href="/auth/github">
                            <FontAwesomeIcon icon={faGithub} />
                            Sign in with GitHub
                        </Button>
                    </Form>

                    <p className="mt-3">
                        Don't have an account?
                        <Link to="/register">Register here</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;