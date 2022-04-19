import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../Images/Bannar/doggiedaycare.jpeg';
import banner2 from '../../../Images/Bannar/catHotel.jpg';
import banner3 from '../../../Images/Bannar/tortouis.jpg';
import banner4 from '../../../Images/Bannar/tIGER.jpg';

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
                    height = {550}
                    alt="First slide"
                />
                <Carousel.Caption className='text-dark'>
                    <h1>Dog's Day Care</h1>
                    <p>Full Day Dog Care Support.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    height = {550}
                    alt="Second slide"
                />

                <Carousel.Caption className='text-dark'>
                    <h1>Cat's Hotel Care</h1>
                    <p>Full Day Cat Care Support.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    height = {550}
                    alt="Third slide"
                />

                <Carousel.Caption className='text-dark'>
                    <h1>Tortoise Day Care</h1>
                    <p>Full Day Care Support for Tortoise.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner4}
                    height = {550}
                    alt="Fourth slide"
                />

                <Carousel.Caption className='text-dark'>
                    <h1>Tiger's Day Care</h1>
                    <p>Full Day Care Support for Tiger.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;