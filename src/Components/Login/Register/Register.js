import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const phoneNumber = event.target.phoneNumber.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

    const navigateToLogIn = () =>{
        navigate('/login')
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Register</h2>
            <Form className='w-75 mx-auto' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="email" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="email" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p>Already Have an Account? <Link to={"/login"} className='text-danger pe-auto text-decoration-none' onClick={navigateToLogIn}>Please LogIn</Link></p>
            </Form>
        </div>
    );
};

export default Register;