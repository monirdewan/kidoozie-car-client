import React, { useEffect, useState } from 'react';

const Category = () => {
    const [jobs, setJobs] = useState([]);
    const [activeTab , setActiveTab ] = useState("sports-car")

    useEffect(()=>{
        fetch(`http://localhost:5000/products/${activeTab}`)
        .then(res => res.json())
        .then(data =>{
            setJobs(data)
            console.log(data)
        })
    },[activeTab])

    const handleTabClick = tabName =>{
        setActiveTab(tabName)
    }
    return (
        <div className='mx-auto text-center space-x-4'>
            <button onClick={()=>handleTabClick("sports-car")} className={`border p-4 rounded-md border-red-500 ${activeTab == "sports-car"?" bg-[#FF6799] text-white":""}`}>Sports Car</button>
            <button onClick={()=>handleTabClick("dump-truck")} className={`border p-4 rounded-md border-red-500 ${activeTab == "dump-truck"?" bg-[#FF6799] text-white":""}`}>Dump Truck</button>
            <button onClick={()=>handleTabClick("police-car")} className={`border p-4 rounded-md border-red-500 ${activeTab == "police-car"?" bg-[#FF6799] text-white":""}`}>Police car</button>
        </div>
    );
};

export default Category;