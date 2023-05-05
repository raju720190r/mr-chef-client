/* eslint-disable no-unused-vars */
import React from 'react';

const About = () => {
    return (
        <div className='md:mx-20 my-28 grid md:grid-cols-2 bg-gray-200 rounded'>
            <div className='p-2'>
                <img className='img-fluid rounded' src="https://s.hdnux.com/photos/01/32/35/50/23714350/3/1200x0.jpg" alt="" />
            </div>
            <div className="section-title flex flex-col justify-center">
                <div className=' px-8 py-12'>
                    <div className='flex mx-auto space-x-3'>
                        <div className=' w-20 md:w-24 h-1 bg-gray-300 inline-flex mt-auto mb-5 rounded-e-md rounded-s-md'></div>
                        <h2 className='text-4xl font-lato font-bold'>About Us </h2>
                        <div className='w-20 md:w-24 h-1 bg-gray-300 inline-flex mt-auto mb-5 rounded-e-md rounded-s-md'></div>
                    </div>
                    <p className='my-5 font-popins text-slate-800'>We are a family-owned and operated restaurant that has been serving delicious food to our community for over 20 years. Our passion for food and dedication to quality is reflected in every dish we serve</p>
                </div>
            </div>
        </div>
    );
};

export default About;