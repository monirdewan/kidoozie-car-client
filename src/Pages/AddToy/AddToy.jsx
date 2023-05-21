import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const AddToy = () => {
  const {user} = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const sName = form.sellerName.value;
    const pictureURL = form.pictureURL.value;
    const sEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const addToycar = { name, sName, pictureURL, sEmail, subCategory, price, rating, quantity, description };
    console.log(addToycar)
    //send data to server
    fetch('https://kidoozie-car-server.vercel.app/add-toy', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(addToycar)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

  }
  return (
    <div className='my-12'>
      <h2 className='text-5xl font-bold text-center'>Add A Toy</h2>
      <div className=" min-h-screen bg-base-200 ">
        <div className="hero-content ">
          <div className="card  w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleAddToy} className='card-body '>
              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 '>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Product Name</span>
                  </label>
                  <input type="text" name='name'  placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Seller Name</span>
                  </label>
                  <input type="text" name='sellerName' defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Picture URL of the toy</span>
                  </label>
                  <input type="text" name='pictureURL' placeholder="pictureURL" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Seller Email</span>
                  </label>
                  <input type="text" name='sellerEmail' defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Add Toy Sub-category</span>
                  </label>
                  <select name="subCategory" className="select select-bordered" defaultValue='sports-car' >
                    <option disabled hidden>Choose an option</option>
                    <option value="sports-car">Sports Car</option>
                    <option value="dump-truck">Dump Truck</option>
                    <option value="police-car">Police Car</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Price</span>
                  </label>
                  <input type="text" name='price' placeholder="price" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Rating</span>
                  </label>
                  <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Available quantity</span>
                  </label>
                  <input type="text" name='quantity' placeholder="Available quantity" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-semibold">Product description</span>
                  </label>
                  <textarea name='description' placeholder="Product Description" className="input input-bordered h-24" cols="30" rows="100"></textarea>
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

export default AddToy;