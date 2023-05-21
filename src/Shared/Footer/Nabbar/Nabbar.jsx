import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Tooltip } from 'react-tooltip';

const Nabbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error =>{
            console.log(error.message)
        })
    }
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addtoy'>All Toys</Link></li>
       {
        user && <>
         <li><Link to='/mytoy'>My Toys</Link></li>
        <li><Link to='/addtoy'>Add A Toy</Link></li>
        </>
       }
        <li><Link to='/about'>Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img src="logo.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    
                    user?<div className='flex items-center gap-4'>
                    <img
                      style={{ height: '40px', width: '40px' }}
                      className='rounded-full border border-dark'
                      src={user?.photoURL}
                      data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}
                     alt="" />
                     <Tooltip id="my-tooltip" />
                     
                    <Link onClick={handleLogOut} className='text-decoration-none text-dark '>Log Out</Link>
                  </div> : <button className="btn btn-error bg-[#FF6799] text-white font-bold"><Link to='/login'>Login</Link>{console.log(user)}</button>
                }
           
            </div>
        </div>
    );
};

export default Nabbar;