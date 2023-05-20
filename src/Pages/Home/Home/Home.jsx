import React from 'react';
import Banner from '../Banner/Banner';
import Testimonials from '../Testimonials/Testimonials';
import OurServices from '../OurServices/OurServices';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Testimonials></Testimonials>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;