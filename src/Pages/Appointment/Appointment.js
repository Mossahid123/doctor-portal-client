import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import bg from '../../assets/images/bg.png'
import AppointmentServices from './AppointmentServices';
import AppointmentBanner from './AppointmentBanner';


const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div style={{
            background: `url(${bg})`
        }}> <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AppointmentServices date={date}></AppointmentServices>
            <Footer></Footer>
        </div>

    );
};

export default Appointment;