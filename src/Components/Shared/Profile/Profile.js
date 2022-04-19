import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import AppointTime from '../Appointment Time/AppointTime';

const Profile = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [time, setTime] = useState('');
    function randomDate(start, end) {
        const randomDate12 = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        // setTime(randomDate12);
    }

    randomDate(new Date(2022, 4, 15), new Date());

    if (user) {
        return (
            <div className='container rounded w-50 mx-auto mt-5 mb-5'>
                <img className='w-50 border border-dark d-block mx-auto my-2 rounded-circle' src={user.photoURL} alt="" />
                <h1>Name: {user.displayName}</h1>
                <h2>Email: {user.email}</h2>
                <h4>Appoitment Time:{time}</h4>
            </div>
        );
    }
    return children;
};


export default Profile;