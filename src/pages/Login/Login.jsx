import React, { useContext, useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Login = () => {

    const [user, setUser] = useState(null);

    const { createUserByGoogle } = useContext(AuthContext);
    const { createUserByGithub } = useContext(AuthContext);
    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    const handleLoginByGoogle = () => {
        createUserByGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    const handleLoginByGithub = () => {
        createUserByGithub()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1 className='text-center'>Login</h1>
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>

                        <div className='text-center mt-4'>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </div>

                        <hr />

                        <Button onClick={handleLoginByGoogle} className='me-4' variant="danger">
                            <FontAwesomeIcon icon={faGoogle} />
                            Sign in with Google
                        </Button>
                        {user && <div>
                            <h3>User: {user.displayName}</h3>
                        </div>}

                        <Button onClick={handleLoginByGithub} variant="dark">
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