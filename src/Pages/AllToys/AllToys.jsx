import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AllToys = () => {
   
    const [toys, setToys] = useState(null)
    const [search, setSearch] = useState('')
   useEffect(()=>{
    fetch('https://kidoozie-car-server.vercel.app/products')
    .then(res => res.json())
    .then(data =>{
        setToys(data)
    })
   },[])

   const handleSearch =()=>{
    fetch(`https://kidoozie-car-server.vercel.app/${search}`)
    .then(res => res.json())
    .then(data =>{
        setToys(data)
    })
   }

    return (
        <div className='m-12'>
            <div className=" p-2 text-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="border border-[#FF6799] rounded-full py-2"
          />{" "}
          <button className='bg-[#FF6799] py-2 px-8 rounded-full font-bold text-white' onClick={handleSearch}>Search</button>
        </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       
                            {
                                toys && toys.map(toy => 
                                     <tr key={toy._id}>
                                    <td>{toy.sName}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.subCategory}</td>
                                    <td>$ {toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td><Link  to={`/productDetails/${toy._id}`} className="btn btn-error bg-[#FF6799] text-white font-bold">View Details</Link></td>
                                    </tr>
                                )
                            }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;