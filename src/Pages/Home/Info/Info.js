import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import phone from '../../../assets/icons/phone.svg';
import marker from '../../../assets/icons/marker.svg';

const Info = () => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
            <div className='bg-gradient-to-r from-primary to-secondary card lg:card-side mr-6 px-10 h-48'>
                <figure className='shadow-xl'><img src={clock} className="w-20 h-20" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className='bg-black card lg:card-side text-white mr-6 px-10 h-48'>
                <figure><img src={marker} className="w-14 h-20" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className='bg-gradient-to-r from-primary to-secondary card lg:card-side px-10 h-48'>
                <figure><img src={phone} className="w-20 h-20" alt="Album" /></figure>
                <div class="card-body"> 
                    <h2 class="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Info;