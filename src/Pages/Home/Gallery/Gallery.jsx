import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [toys, setToys] = useState([])
   useEffect(()=>{
    fetch('https://kidoozie-car-server.vercel.app/products')
    .then(res => res.json())
    .then(data =>{
        setToys(data)
    })
   },[])
    return (
        <div className='w-full my-24 mx-auto text-center'>
            <h2 className='text-5xl font-bold text-[#2FBDF3] my-14'>Our Gallery</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto'>
            {toys.map(toy => <div><img className='w-1/2' src={toy.pictureURL} alt="" /></div>)}
            </div>
        </div>
    );
};

export default Gallery;