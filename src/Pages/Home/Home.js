import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import DentalCare from './DentalCare';
import Info from './Info';
import MakeAppoiment from './MakeAppoiment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <DentalCare/>
            <MakeAppoiment/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default Home;