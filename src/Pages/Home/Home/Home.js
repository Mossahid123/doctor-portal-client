import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold'>Home</h2>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;