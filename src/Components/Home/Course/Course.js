import React from 'react';
import { useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, img, description, price } = course;
    const navigate = useNavigate();

    const navigateToCourseDetail = id => {
        navigate(`/course/${id}`);
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card pb-3 text-center" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top W-100" alt="" />
                <div className="card-body">
                <p>Course Fee: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToCourseDetail(id)} className='btn btn-primary'>Enroll Now</button>                </div>
            </div>
        </div>
    );
};

export default Course;