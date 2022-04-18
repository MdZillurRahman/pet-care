import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import ProPic from './../../Images/ProfilePic.png'

const About = () => {
    return (
        <div className=''>
            <Card style={{ width: '25rem'}}>
                <Card.Img variant="top" src={ProPic} />
                <Card.Body>
                    <Card.Title><h2>Name: Md. Zillur Rahman</h2></Card.Title>
                    <Card.Text>
                        <h5>Designation: Physics(Hons.), University Of Dhaka.</h5>
                        <p>Description: I am a Physics enthusiast. And I like to teach students. It is my duty to help them to achieve their dream goal.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;