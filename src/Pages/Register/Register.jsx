import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const Register = () => {
    const {registerUser, updateUserProfile} = useContext(AuthContext)
    const [error, setError] = useState("")
    const navigate = useNavigate("")
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(!/(?=.{6,})/.test(password)){
            setError('Your password should be 6 characters')
            return;
        }else if(!/(?=.*[a-zA-Z])/.test(password)){
            setError('You should enter letter small and capital')
            return;
        }else if(!/(?=.*\d)/.test(password)){
            setError('You should enter some digits')
            return;
        }else if(!/(?=.*[!@#$%&? "])/.test(password)){
            setError('You Should  enter a Special characters')
            return;
        }
        setError('')
        console.log(name,photo,email,password)
        registerUser(email,password)
        .then(result =>{
            console.log(result.user)
            updateProfeleData(result.user,name,photo)
            if(result.user){
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
                    title: 'Your Account Created Successfully'
                  })
            }
            navigate('/')
        })
        .catch(error =>{
            setError(error.message);
        })

        const updateProfeleData=(user,name, photo)=>{
            updateUserProfile(user,name,photo)
            .then(()=>{
                
            })
            .catch(error =>{
                setError(error.message)
            })
        }
        

    }
    return (
        <div className=" min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card  w-full md:w-1/2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" required name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" required name='photo' placeholder="Photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" required name='email' placeholder="email" className="input input-bordered" />
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
                                <input type="submit" value="Sign Up" className="btn btn-primary"/>
                            </div>
                            </form>
                            <p>Have an account? <Link to='/login' className='text-blue-600'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Register;