import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MapAndFAQ from '../MapAndFAQ/MapAndFAQ';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <div className="banner">
                <Banner></Banner>
            </div>
            <About></About>
            <Service></Service>
            <MapAndFAQ></MapAndFAQ>
        </div>
    );
};

export default Home;