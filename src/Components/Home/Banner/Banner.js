import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../Images/Bannar/Bannar1.jpg';
import banner2 from '../../../Images/Bannar/Bannar2.jpg';
import banner3 from '../../../Images/Bannar/Bannar3.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    height = {600}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Web Design</h3>
                    <p>Learn and Become a Junior Web Developer.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    height = {600}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Graphics Design</h3>
                    <p>You can do any design over your imagination.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    height = {600}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Apps Development</h3>
                    <p>Build Your Own Application.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;