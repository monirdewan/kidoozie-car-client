import React, { useContext, useState } from 'react';
import { Rating, Star } from '@smastrom/react-rating'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AuthContext } from '../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  }
const CategoryCard = ({product}) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const {_id, name, pictureURL, price} = product;
    let pRating = parseInt(Math.round(product.rating))
    const [rating, setRating] = useState(0)
    const notLogin =()=>{
       
            if(!user){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'warning',
                    title: 'Without a login, you can not visit the single toy details page'
                  })
                  navigate('/login')
            }
        
    }
    console.log(typeof pRating)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto m-12">
            <figure><img src={pictureURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <span className='flex'><p>Rating: {product.rating}</p><Rating style={{ maxWidth: 150 }} value={pRating}    itemStyles={myStyles} /></span>
                <div className="card-actions ">
                   
                    <button onClick={notLogin}   className="border py-3 hover:bg-[#16b6f5] hover:text-white px-5 rounded-md font-bold border-[#2FBDF3]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;