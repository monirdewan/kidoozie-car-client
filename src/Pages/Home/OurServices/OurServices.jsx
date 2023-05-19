import React from 'react';
import { FaTruckMoving } from 'react-icons/fa';
import { RiCustomerService2Line } from 'react-icons/ri';
import { AiFillGift } from 'react-icons/ai';
import { GiReceiveMoney } from 'react-icons/gi';

const OurServices = () => {
    return (
        <div className='my-12'>
            <div className='text-center mb-12'>
                <h2 className='text-5xl font-bold text-[#2FBDF3]'>Our Services</h2>
                <p className='text-xl font-semibold mt-5'>What We Provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around gap-6'>
                <div className='border p-4 rounded-lg text-center'>
                    <FaTruckMoving className='mx-auto text-5xl text-[#FF6799]'/>
                    <h4 className='text-lg font-semibold mt-4'>Worldwide Shopping</h4>
                    <p>On order over $120</p>
                </div>
                <div className='border p-4 rounded-lg text-center'>
                    <RiCustomerService2Line className='mx-auto text-5xl text-[#FF6799]'/>
                    <h4 className='text-lg font-semibold mt-4'>24 X 7 Free Support</h4>
                    <p>Online Support</p>
                </div>
                <div className='border p-4 rounded-lg text-center'>
                    <AiFillGift className='mx-auto text-5xl text-[#FF6799]'/>
                    <h4 className='text-lg font-semibold mt-4'>Special Gift Cards</h4>
                    <p>Give The Perfect Gift</p>
                </div>
                <div className='border p-4 rounded-lg text-center'>
                    <GiReceiveMoney className='mx-auto text-5xl text-[#FF6799]'/>
                    <h4 className='text-lg font-semibold mt-4'>24 X 7 Free Support</h4>
                    <p>Online Support</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;