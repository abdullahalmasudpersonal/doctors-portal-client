import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const Services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride Teatment',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Cavity Filling',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Teeth Whitening',
            img: whitening
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h4 className='text-3xl'>Services We Provide</h4>
            </div>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
                Services.map(service => <Service
                    key={service._id}
                    service={service}>
                </Service>)
            }
           </div>
        </div>
    );
};

export default Services;