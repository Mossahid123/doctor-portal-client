import React from 'react';
import Banner from '../Banner/Banner';
import Communication from '../Communication/Communication';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Footer from '../../../Shared/Footer/Footer';



const Home = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold'>Home</h2>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Communication></Communication>
            <Footer></Footer>
        </div>
    );
};

export default Home;