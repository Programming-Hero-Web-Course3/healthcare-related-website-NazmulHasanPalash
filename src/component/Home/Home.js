import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="w-100">
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>

        </div>
    );
};

export default Home;