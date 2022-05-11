import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoiment = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block md:block'>
                <img className='md:mt-[-100px] lg:mt-[-100px] lg:p-8' src={doctor} alt='' />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold'>Appoiment</h3>
                <h4 className='text-3xl text-white'>Make an Appoiment Today</h4>
                <h4 className='text-white'>Lorem klsf sal kasld masj lsk klsf sal kasld masj klsf sal kasld masj lsk klsf sal kasld klsf sal kasld masj lsk klsf sal kasld klsf sal kasld masj lsk klsf sal kasld klsf sal kasld masj lsk klsf sal kasld</h4>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
        </div>
    );
};

export default MakeAppoiment;