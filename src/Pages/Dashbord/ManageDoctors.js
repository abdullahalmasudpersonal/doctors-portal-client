import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Login/Loading';

const ManageDoctors = () => {
    const {data: doctors, isLoading} = useQuery('doctors', ()=> fetch('http://localhost:5000/doctor',{
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>res.json()));

    if(isLoading){
        return <Loading/>
    }

    return (
        <div>
            <h3 className='text-2xl'>Manage Doctor: {doctors.length}</h3>
        </div>
    );
};

export default ManageDoctors;