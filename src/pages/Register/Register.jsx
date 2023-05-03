import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        //validation
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add one uppercase');
            return;
        }
        else if (password.length < 6) {
            setError('Password must be 6 Character long');
            return;
        }

        createUser(email, password, name, photo)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserData(result.user, name, photo);
                setError('');
                form.reset();
                setSuccess('User created Successfully')
            })
            .catch(error => {
                setError(error.message);
            })
    };

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log('user profile updated');
            })
            .catch(error => {
                console.error(error.message)
            })
    }
    return (
        <div className="d-flex justify-content-center align-items-center w-75">
            <div className="col-md-6">
                <h1>Registration</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhotoUrl">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter photo URL" required />
                    </Form.Group>

                    <div className='text-center'>
                        <Button className='mt-3' variant="primary" type="submit">
                            Register
                        </Button>
                    </div>
                </Form>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>

                <p className="mt-3">
                    Already have an account?
                    <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;