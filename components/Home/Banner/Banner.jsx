import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css'

const Banner = () => {
    const backgroundImages = {
        backgroundImage: `url('https://i.ibb.co/rbmgrRj/istockphoto-1081422898-612x612.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    }
    return (
        <div style={backgroundImages} className='banner w-100 mx-auto bg-gray-600 '>
            <h2 className='text-5xl mb-3 text-white font-bold text-center'>Welcome to Chef</h2>
            <h2 className='text-5xl mb-3 text-white text-center'>Visit Our Chef Site And choice Your Chef</h2>
            <button className='btn btn-primary'>Visit Our Chef</button>
        </div>
    );
};

export default Banner;