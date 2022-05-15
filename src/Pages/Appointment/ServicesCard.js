import React from 'react';

const ServicesCard = ({ service,setTreatment }) => {
    const { slots, name } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No slot available. Try another date.</span> }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'sapce'} available.</p>
               
                <div class="card-actions justify-center mt-5">
                    <label for="my-modal" class="btn text-white font-bold bg-gradient-to-r from-primary to-secondary border-0"
                    disabled={slots.length === 0}
                    onClick={()=>setTreatment(service)}
                    >Book Appointment</label>
                    
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;