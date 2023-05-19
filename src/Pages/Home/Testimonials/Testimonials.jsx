import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import img1 from '../../../assets/testimonials/01.png';
import img2 from '../../../assets/testimonials/02.png';
import img3 from '../../../assets/testimonials/03.png';
import img4 from '../../../assets/testimonials/04.png';

const Testimonials = () => {
    return (
        <div>
            <div className='text-center mb-20'>
            <h2 className='text-5xl font-bold'>Customer Saying</h2>
            <p className=' text-xl font-semibold mt-6'>Meet Our Happy Clients</p>
            </div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="mx-auto">
                        <img src={img1} className="w-28 h-28 rounded-full mx-auto" />
                        <div className='text-center w-full my-8'>
                            <p className='w-1/2 mx-auto'><FaQuoteLeft className='text-4xl text-[#FF6799] font-bold' /> <span className='ml-6'>
                                I'm always impressed by the wide range of toys this store has to offer. It's my go-to for all things playtime!</span> </p>
                            <h4 className='text-2xl mt-10 font-bold text-[#2FBDF3]'>Jhon dhoe</h4>
                            <p className='font-semibold'>Web Designer</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <div className="mx-auto">
                        <img src={img2} className="w-28 h-28 rounded-full mx-auto" />
                        <div className='text-center w-full my-8'>
                            <p className='w-1/2 mx-auto'><FaQuoteLeft className='text-4xl text-[#FF6799] font-bold' /> <span className='ml-6'>
                            I appreciate the focus on sustainable and eco-friendly toys at this shop. It's so important for our kids' future.</span> </p>
                            <h4 className='text-2xl mt-10 font-bold text-[#2FBDF3]'>Jason Thoreson</h4>
                            <p className='font-semibold'>Software Engineer</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div className="mx-auto">
                        <img src={img3} className="w-28 h-28 rounded-full mx-auto" />
                        <div className='text-center w-full my-8'>
                            <p className='w-1/2 mx-auto'><FaQuoteLeft className='text-4xl text-[#FF6799] font-bold' /> <span className='ml-6'>
                            The customer service at this toy shop is exceptional. They went above and beyond to help me find the perfect toy.</span> </p>
                            <h4 className='text-2xl mt-10 font-bold text-[#2FBDF3]'>Anne Marshall</h4>
                            <p className='font-semibold'>IT Specialist</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                <div className="mx-auto">
                        <img src={img4} className="w-28 h-28 rounded-full mx-auto" />
                        <div className='text-center w-full my-8'>
                            <p className='w-1/2 mx-auto'><FaQuoteLeft className='text-4xl text-[#FF6799] font-bold' /> <span className='ml-6'>
                            I'm always impressed by the wide range of toys this store has to offer. It's my go-to for all things playtime!</span> </p>
                            <h4 className='text-2xl mt-10 font-bold text-[#2FBDF3]'>Jeffery Weiler</h4>
                            <p className='font-semibold'>Ethical Hacker</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;