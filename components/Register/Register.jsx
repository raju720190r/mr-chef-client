import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form =Form.target;
        
        console.log(form)
    };
    return (
        <> 
        <h2 className='fs-1 font-bold text-center mt-5 mb-5'>Please Register</h2>
        <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" id='name'  name='name'  required/>
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email"  name='email' required/>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter your password"  name='password' required/>
            </Form.Group>
            <Form.Group className='mb-3' controlId="formPhotoUrl">
                <Form.Label>Photo URL:</Form.Label>
                <Form.Control type="text" placeholder="Enter the URL of your profile photo" name='photoUrl' required/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </>
    );
};

export default Register;