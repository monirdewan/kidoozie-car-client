import React, { useState } from 'react';
import { Rating, Star } from '@smastrom/react-rating'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  }
const CategoryCard = ({product}) => {
    const {_id, name, pictureURL, price} = product;
    let pRating = parseInt(Math.round(product.rating))
    const [rating, setRating] = useState(0)
    console.log(typeof pRating)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto m-12">
            <figure><img src={pictureURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <span className='flex'><p>Rating: {product.rating}</p><Rating style={{ maxWidth: 150 }} value={pRating}    itemStyles={myStyles} /></span>
                <div className="card-actions ">
                    <button  className="border py-3 hover:bg-[#16b6f5] hover:text-white px-5 rounded-md font-bold border-[#2FBDF3]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;