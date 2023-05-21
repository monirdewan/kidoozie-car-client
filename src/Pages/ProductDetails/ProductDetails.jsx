import React, { useEffect, useState } from 'react';
import { Rating, Star } from '@smastrom/react-rating'
import { useParams } from 'react-router-dom';


const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

const ProductDetails = () => {
    const [product, setProduct] = useState([])
    const { name, sName, pictureURL, sEmail, subCategory, price, quantity, description } = product;
    let pRating = parseInt(Math.round(product.rating))
    const [rating, setRating] = useState(0)
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://kidoozie-car-server.vercel.app/productDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])
    return (
        <div className='w-full my-24'>
            <h2 className='text-4xl font-bold text-center text-[#2FBDF3] mb-24'>This is Product Details</h2>
            <div className='w-full md:flex justify-center items-center md:space-x-10'>
                <div><img src={pictureURL} alt="" /></div>
                <div className='md:space-y-2'>
                    <h4 className='text-2xl mb-4'><span className='font-semibold'>Toy Name</span>: {name}</h4>
                    <p><span className='font-semibold'>Seller Name</span>: {sName}</p>
                    <p><span className='font-semibold'>Seller Email</span>: {sEmail}</p>
                    <p><span className='font-semibold'>Category</span>: {subCategory}</p>
                    <p><span className='font-semibold'>Available Quantity</span>: {quantity}</p>
                    <p><span className='font-semibold'>Price</span>: ${price}</p>
                    <span className='flex items-center'><p className='mr-4'><span className='font-semibold'>Rating</span>: {product.rating}</p><Rating style={{ maxWidth: 150 }} value={pRating} itemStyles={myStyles} /></span>
                    <p><span className='font-semibold'>Product Description</span>: {description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;