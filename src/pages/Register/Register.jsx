import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className="d-flex justify-content-center align-items-center w-75">
            <div className="col-md-6">
                <h1>Registration</h1>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhotoUrl">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" placeholder="Enter photo URL" />
                    </Form.Group>

                    <div className='text-center'>
                        <Button className='mt-3' variant="primary" type="submit">
                            Register
                        </Button>
                    </div>
                </Form>

                <p className="mt-3">
                    Already have an account?
                    <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;