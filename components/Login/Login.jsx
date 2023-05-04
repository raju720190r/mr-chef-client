import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {


    const handleLogin = () => {
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email,password)
    }
    return (
        <Form className='w-50 mx-auto' onSubmit={handleLogin}>
            <h2 className='fs-1 font-bold mt-5 mb-5 text-center'>Please Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className='text-dark w-100' variant="primary" type="submit">
                Submit
            </Button>
            <p className='text-center mt-3'><small>New user?
                <Link className='text-primary pl-3' to={'/register'}>Register Here</Link></small></p>
        </Form>
    );
};

export default Login;