import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [toys, setToys] = useState([]);
    const shortToys =  toys.slice(0,6);
    console.log(shortToys)
   useEffect(()=>{
    fetch('https://kidoozie-car-server.vercel.app/products')
    .then(res => res.json())
    .then(data =>{
        setToys(data)
    })
   },[])
    return (
        <div className='w-full my-24 mx-auto text-center'>
            <div className='my-14'>
            <h2 className='text-5xl font-bold text-[#2FBDF3] mb-4'>Best From Gallery</h2>
            <p>Our Top Picks For Toys</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {shortToys.map(toy => <div className='h-80 bg-base-100 shadow-xl'><img  className='h-72 rounded-xl mx-auto  py-4 px-8' src={toy.pictureURL} alt="" /></div>)}
            </div>
        </div>
        
    );
};

export default Gallery;