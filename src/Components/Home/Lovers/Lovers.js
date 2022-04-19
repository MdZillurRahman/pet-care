import React, { useEffect, useState } from 'react';
import Lover from '../Lover/Lover';

const Lovers = () => {
        const [lovers, setLovers] = useState([]);

    useEffect( ()=>{
        fetch('lovers.json')
        .then(res => res.json())
        .then(data => setLovers(data));
    }, [])

    return (
        <div id="lovers" className='container'>
            <div>
            <h1 className='text-primary text-center mt-5'> Pet Lovers</h1>
            <div className="row">
            {
                lovers.map(lover => <Lover
                    key={lover.id}
                    lover={lover}
                >
                </Lover>)
            }
            </div>
            </div>
        </div>
    );

};

export default Lovers;