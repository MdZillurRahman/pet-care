import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container mb-4 pb-5'>
            <div>
            <h1 className='text-primary text-center mt-5'>My Services</h1>
            <div className="row">
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;