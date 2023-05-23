import React from 'react';
import bannerimg from '../../../assets/banner/banner.png'

const Banner = () => {
    return (
        <div className="hero relative my-14" >
            <div className="hero-overlay bg-opacity-60">
                <img className='h-96 sm:h-auto' src={bannerimg} alt="" />
            </div>
            <div className="hero-conten absolute left-8">
                <div className="max-w-md ">
                    <h1 className="mb-5 text-5xl font-bold text-[#FF6799]">Kidoozie Car</h1>
                    <p className="mb-5">Their user-friendly website allows customers to easily browse through various categories and filter options, making it simple to find the desired toy car. Each product listing provides detailed descriptions.</p>
                    <button className="btn  bg-[#2FBDF3] rounded-full">SHOP NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;