import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch(`https://kidoozie-car-server.vercel.app/myProducts/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    const handleDelete = id =>{
        fetch(`https://kidoozie-car-server.vercel.app/update/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div className='m-12'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Seller Email</th>
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
                                    <td>

                                        <div className="flex items-center ">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={toy.pictureURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>

                                    </td>
                                    <td>{toy.sName}</td>
                                    <td>{toy.name.length > 5 && toy.description.slice(0, 10)}...</td>
                                    <td className='text-sm' style={{ "fontSize": "10px" }}>{toy.sEmail}</td>
                                    <td>{toy.subCategory}</td>
                                    <td>$ {toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td>{toy.description.length > 10 && toy.description.slice(0, 15)}...</td>
                                    <td><Link to={`/updateProduct/${toy._id}`} className="btn btn-error bg-[#FF6799] text-white font-bold">Edit</Link></td>
                                    <td>
                                        <button onClick={()=>handleDelete(toy._id)} className="btn btn-square btn-error bg-[#FF6799] text-white font-bold">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;