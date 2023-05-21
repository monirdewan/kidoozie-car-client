import React from 'react';
import Banner from '../Banner/Banner';
import Testimonials from '../Testimonials/Testimonials';
import OurServices from '../OurServices/OurServices';
import Category from '../Category/Category';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Gallery></Gallery>
            <Testimonials></Testimonials>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;