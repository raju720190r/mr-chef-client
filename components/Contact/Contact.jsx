import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='w-50 mx-auto'>
            <h2 className='fs-1 font-bold text-center m-3'>Contact</h2>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control className='mb-3' as="textarea" rows={3} placeholder="Enter your message"/>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default Contact;