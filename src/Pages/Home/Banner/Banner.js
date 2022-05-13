import React from 'react';
import banner from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="px-12 bg-bg">
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} class=" rounded-lg shadow-2xl lg:w-2/4 sm:w-full rounded-lg"  />
                    <div className='lg:w-2/4 sm:w-full'>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn text-white font-bold bg-gradient-to-r from-primary to-secondary w-32 border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;