import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [products, setProducts] = useState([]);
    const [activeTab , setActiveTab ] = useState("sports-car")

    useEffect(()=>{
        fetch(`https://kidoozie-car-server.vercel.app/products/${activeTab}`)
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
            console.log(data)
        })
    },[activeTab])

    const handleTabClick = tabName =>{
        setActiveTab(tabName)
    }
    return (
        <div>
            <div className='mx-auto text-center space-x-4'>
            <button onClick={()=>handleTabClick("sports-car")} className={`border p-4 rounded-md border-red-500 ${activeTab == "sports-car"?" bg-[#FF6799] text-white":""}`}>Sports Car</button>
            <button onClick={()=>handleTabClick("dump-truck")} className={`border p-4 rounded-md border-red-500 ${activeTab == "dump-truck"?" bg-[#FF6799] text-white":""}`}>Dump Truck</button>
            <button onClick={()=>handleTabClick("police-car")} className={`border p-4 rounded-md border-red-500 ${activeTab == "police-car"?" bg-[#FF6799] text-white":""}`}>Police car</button>
        </div>
        <div>
            {
                products.map(product => <CategoryCard key={product._id} product={product}></CategoryCard>)
            }
        </div>
        </div>
    );
};

export default Category;