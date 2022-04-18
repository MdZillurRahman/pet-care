import React from 'react';
import ProPic from './../../Images/ProfilePic.png'
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='circular'>
                <img src={ProPic} alt="" />
            </div>
            <div className='justify'>
                <h2>Md. Zillur Rahman</h2>
                <h5>I like animal. I do think they are the loyal friedns of Human.
                I like animal. I do think they are the loyal friedns of Human.I like animal. I do think they are the loyal friedns of Human.I like animal. I do think they are the loyal friedns of Human.I like animal. I do think they are the loyal friedns of Human.
                </h5>
            </div>
        </div >
    );
};

export default About;