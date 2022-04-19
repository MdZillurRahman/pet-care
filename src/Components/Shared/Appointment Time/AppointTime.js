import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const AppointTime = () => {
    const [time, setTime] = useState('');

    function randomDate(start, end) {
        const randomDate12 = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    randomDate(new Date(2022, 4, 15), new Date());
};

export default AppointTime;