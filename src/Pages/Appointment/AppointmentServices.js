import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import ServicesCard from './ServicesCard';

const AppointmentServices = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment , setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-secondary font-bold'>Available Services on {format(date, "PP")}</h1>
            <h1 className='text-center'>Please select a service.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></ServicesCard>)
                }
                {
                    treatment && <AppointmentModal treatment={treatment} setTreatment={setTreatment} date={date}></AppointmentModal>
                }
            </div>
        </div>
    );
};

export default AppointmentServices;