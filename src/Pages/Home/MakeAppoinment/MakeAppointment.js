import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <div className='flex justify-center items-center mt-36 px-12' style={{background:`url(${appointment})`}}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-primary font-bold'>Appointment</h3>
                <h1 className='text-white mt-5'>Make an appointment Today</h1>
                <p className='text-white mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase mt-2">Get Started</button>
            </div>
        </div>
    );
};

export default MakeAppointment;