import React from 'react';

const ServicesCard = ({ service }) => {
    const { slots, name } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No slot available. Try another date.</span> }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'sapce'} available.</p>
               
                <div class="card-actions justify-center mt-5">
                    <button class="btn text-white font-bold bg-gradient-to-r from-primary to-secondary border-0" disabled={slots.length === 0}>Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;