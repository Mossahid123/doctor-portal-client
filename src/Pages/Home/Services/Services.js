import React from 'react';
import Service from '../Home/Service/Service';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';

const Services = () => {
    return (
        <div className='mt-10'>
            <h5 className='text-2xl text-center text-secondary font-bold uppercase'>Our service</h5>
            <h2 className='text-4xl text-center text-black '>Services We Provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5 px-12'>
                <Service cardTitle="Fluoride Treatment" img={fluoride} bg="bg-white"></Service>
                <Service cardTitle="Cavity Filling" img={cavity} bg="bg-white"></Service>
                <Service cardTitle="Teeth Whitening" img={whitening} bg="bg-white"></Service>
            </div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:w-2/4 sm:w-full text-center ml-3'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;