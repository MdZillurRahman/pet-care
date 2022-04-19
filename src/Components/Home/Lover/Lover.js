import React from 'react';

const Lover = ({ lover }) => {
    const { id, name, img, description } = lover;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card pb-3 text-center" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top W-100" alt="" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <p><small>{description}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Lover;