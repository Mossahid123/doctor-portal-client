import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'


const AppointmentBanner = ({date , setDate}) => {
    
    
    return (
        <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row-reverse lg:gap-x-32 ">
                        <div>
                            <img className='shadow-2xl' style={{ width: '594px' }} src={chair} alt='' />
                        </div>

                        <div>
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                            <p>You have selected.</p>;
                        </div>
                    </div>
                </div>
    );
};

export default AppointmentBanner;