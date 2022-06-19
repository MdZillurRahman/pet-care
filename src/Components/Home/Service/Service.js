import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id: _id, name, img, description, serviceFee } = service;
    const navigate = useNavigate();

    const navigateToCheckout = id => {
        navigate(`/checkout`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card pb-3 text-center" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top W-100" alt="" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <p>Service Fee: ${serviceFee}</p>
                    <p><small>{description}</small></p>
                    <button onClick={() => navigateToCheckout(_id)} className='btn btn-primary'>Book Now</button>                </div>
            </div>
        </div>
    );
};

export default Service;