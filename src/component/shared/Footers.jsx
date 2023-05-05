/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/cf-logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaYahoo, FaYoutube } from "react-icons/fa";
import { Card, Label, TextInput } from 'flowbite-react';
const Footers = () => {
  return (
    <footer>

      <div className="grid md:grid-cols-3 gap-8 bg-gray-400 p-8 xs:mb-10 px-40">
        <div className='flex flex-col items-center md:items-start'>
          <Link>
          <h2 className='text-2xl text-white'>MR&MRS CHEF</h2>
          </Link>

          <div className='mt-auto'>
            <h4 className='my-5 text-white'>Contact With Us</h4>
            <ul className='flex space-x-2'>
              <li>
                <FaFacebook className='w-5 h-5 text-white' />
              </li>
              <li>
                <FaTwitter className='w-5 h-5 text-white' />
              </li>
              <li>
                <FaYahoo className='w-5 h-5 text-white' />
              </li>
              <li>
                <FaYoutube className='w-5 h-5 text-white' />
              </li>
              <li>
                <FaInstagram className='w-5 h-5 text-white' />
              </li>
            </ul>
          </div>

        </div>
        <div className='flex flex-col items-center md:items-start'>
          <ul>
            <li className='my-8'>
              <Link to='/' className='text-white font-medium '>Home </Link>
            </li>
            <li className='mb-8'>
              <Link to='/blog' className='text-white'>Blog </Link>
            </li>
            <li>
              <p className='text-white'>About </p>
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <h2 className='text-white mt-8  font-bold text-lg mb-8'>SubScribe Here</h2>

            <button  className='btn-primary '>Subscribe</button>
          
        </div>
      </div>
      <div className=' bg-gray-800  '>
        <h6 className='py-8 text-center text-white'>@copy write by Raju Ahmmed</h6>
      </div>
    </footer>
  );
};

export default Footers;