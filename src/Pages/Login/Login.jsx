import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const Login = () => {
    const {loginUser,loginWithGoogle,user} = useContext(AuthContext)

    const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const [error, seterror] = useState('')

  const successTost =user =>{
    if(user){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Your Account Login Susseccfull'
          })
    }
  }

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email,password)
        .then(result =>{
            console.log(result.user)
            successTost(result.user)
            navigate(from, {replace:true})
        })
        .catch(error =>{
            seterror(error.message)
        })
    }

    const handleGoogleLogin =()=>{
        loginWithGoogle()
        .then(result =>{
            console.log(result.user)
            successTost(result.user)
            navigate(from, {replace:true})
        })
        .catch(error =>{
           seterror(error.message)
            
        })
    }
    return (
        
            <div className=" min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card  w-full md:w-1/2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p className='text-error'>{error}</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary"/>
                            </div>
                            </form>
                           <div className='text-center space-y-5 mt-6'>
                           <p>Sign In with <button onClick={handleGoogleLogin} className='btn btn-outline btn-warning'>Google</button></p>
                            <p>Don't have an account? <Link className='text-blue-600' to='/register'>Sign Up</Link></p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default Login;