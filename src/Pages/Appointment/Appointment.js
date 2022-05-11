import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmetBanner from './AppointmetBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate ] = useState(new Date());
    return (
        <div>
            <AppointmetBanner date={date} setDate={setDate} />
            <AvailableAppointments date={date} />
            <Footer/>
        </div>
    );
};

export default Appointment;