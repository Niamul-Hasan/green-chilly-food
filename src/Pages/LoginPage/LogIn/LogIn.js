import React from 'react';
import { Button, Form } from 'react-bootstrap';
import "./LogIn.css";

const LogIn = () => {
    return (
        <div className='container mx-auto py-5'>

            <Form className='login-form w-50 mx-auto p-3'>
                <h1 className='text-primary fs-2'>Please Log In</h1>
                <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 w-75" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 w-75" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    LogIn
                </Button>
                <span className='ms-2 text-danger mt-3'>New In GreenChilly?</span><Button className='text-decoration-none text-success' variant="link">Creat An Account Now</Button>
            </Form>
        </div>
    );
};

export default LogIn;