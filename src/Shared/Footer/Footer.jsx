import React, { useContext } from 'react';
import logo from './../../assets/logo.png'
import { FaFacebook, FaInstagram, FaRegMap } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { TbBrandTwitter, TbPhonePause } from 'react-icons/tb';
import { SlSocialFacebook } from 'react-icons/sl';
import { CiYoutube } from 'react-icons/ci';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';


const Footer = () => {
  const { user } = useContext(AuthContext);
  const navItems = <>
    <Link className='text-lg' to='/'>Home</Link>
    <Link className='text-lg' to='/alltoys'>All Toys</Link>
    {
      user && <>
        <Link className='text-lg' to='/mytoy'>My Toys</Link>
        <Link className='text-lg' to='/addtoy'>Add A Toy</Link>
      </>
    }
    <Link className='text-lg' to='/about'>Blogs</Link>
  </>
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src={logo} alt="" />
          <p>Kidoozie Car Store.<br />A kids toy shop is a store that specializes in <br />selling toys and car designed specifically for children.</p>
          <div className='mt-4 '>
            <div className='flex items-center gap-4 mb-2'><span className='text-3xl text-[#FF6799]'><FaRegMap /></span> <p className='text-lg'>Addresss: 1200 Abbot Kinney Nebraska USA</p></div>
            <div className='flex items-center gap-4 mb-2'><span className='text-3xl text-[#FF6799]'><FiMail /></span> <p className='text-lg'>Email: hello@example.com</p></div>
            <div className='flex items-center gap-4 mb-2'><span className='text-3xl text-[#FF6799]'><TbPhonePause /></span> <p className='text-lg'>Phone: (012) 345 6789</p></div>
          </div>
        </div>

        <div>
          <span className="footer-title">Quick Links</span>
          {navItems}
        </div>
        <div>
          <span className="footer-title">Follow Us On</span>
          <a href="https://web.facebook.com/" className="link link-hover flex items-center text-lg mb-2"><SlSocialFacebook className='mr-4 text-[#FF6799] text-2xl' /> Facebook</a>
          <a href="https://twitter.com/" className="link link-hover flex items-center text-lg mb-2"><TbBrandTwitter className='mr-4 text-[#FF6799] text-2xl' /> Twitter</a>
          <a href='https://www.instagram.com/' className="link link-hover flex items-center text-lg mb-2"><FaInstagram className='mr-4 text-[#FF6799] text-2xl' />Instagram</a>
          <a href='https://www.youtube.com/' className="link link-hover flex items-center text-lg mb-2"><CiYoutube className='mr-4 text-[#FF6799] text-2xl' />Youtube</a>
         

        </div>
      </footer>
      <p className='text-center'>Copyright &copy; 2023 | Kidoozie Car . All rights reserved.</p>
    </div>

  );
};

export default Footer;