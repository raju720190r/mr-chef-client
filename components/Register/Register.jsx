import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [photoUrl, setPhotoUrl] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoUrl.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        createUser(email,password)
        .then(res =>{
            const createdUser =res.user;
            console.log(createdUser)
        })
        .catch(error=>{
            console.log(error);
        })

    };
    return (
        <>
            <h2 className='fs-1 font-bold text-center mt-5 mb-5'>Please Register</h2>
            <Form className='w-50 mx-auto' onSubmit={handleRegister}>
                <Form.Group controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter your password" required />
                </Form.Group>
                <Form.Group className='mb-3' controlId="formPhotoUrl">
                    <Form.Label>Photo URL:</Form.Label>
                    <Form.Control type="text" name='photoUrl' placeholder="Enter the URL of your profile photo" required />
                </Form.Group>
                <Button className='w-100 text-dark' variant="primary" type="submit">Register</Button>
            </Form>
        </>
    );
};

export default Register;