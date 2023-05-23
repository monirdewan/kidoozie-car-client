import React, { useEffect, useState } from 'react';
import { useLoaderData} from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateProduct = () => {
    const product = useLoaderData();
    const {_id,price, quantity, description} = product;
    const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const addToycar = { price, quantity, description };
    
    //send data to server
    fetch(`https://kidoozie-car-server.vercel.app/update/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addToycar)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          Swal.fire({
              title: 'Success!',
              text: 'Updated Successfully',
              icon: 'success',
              confirmButtonText: 'OK'
          })
      }
      })

  }
  return (
    <div className='my-12'>
      <h2 className='text-5xl font-bold text-center'>Add A Toy</h2>
      <div className=" min-h-screen bg-base-200 ">
        <div className="hero-content ">
          <div className="card  w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateToy} className='card-body '>
              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 '>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Price</span>
                  </label>
                  <input type="text" name='price' defaultValue={price} placeholder="price" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Available quantity</span>
                  </label>
                  <input type="text" name='quantity' defaultValue={quantity
                } placeholder="Available quantity" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Product description</span>
                  </label>
                  <textarea name='description' defaultValue={description} placeholder="Product Description" className="input input-bordered h-24" cols="30" rows="100"></textarea>
                </div>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary md:w-1/2" type="submit" value="Add Product" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;