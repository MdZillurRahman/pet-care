import React from 'react';
import { Button } from 'react-bootstrap';

const AppointTime = () => {
    function randomDate(start, end) {
        const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        console.log(randomDate);
    }


    return (
        <div>
            <Button onClick={randomDate(new Date(2012, 0, 1), new Date())}>Get A Appointment Time</Button>
        </div>
    );
};

export default AppointTime;