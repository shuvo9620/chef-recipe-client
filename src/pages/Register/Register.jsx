import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password, name, photo)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setName(createdUser);
                setEmail(createdUser);
                setPhotoUrl(createdUser);
                setPassword(createdUser);
                updateUserData(result.user, name, photo);
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
                        <Form.Control type="text" name='photo' placeholder="Enter photo URL" />
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