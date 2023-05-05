/* eslint-disable no-unused-vars */
import React from 'react';
import banner from '/assets/home-banner.jpg'
const Banner = () => {
    return (
        <div className={`px-8 md:px-80 bg-[url('https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA')]  bg-center bg-cover relative z-20 `}>
            <div className='flex items-center text-center'>
            <div className='absolute inset-0 bg-[rgba(0,0,0,0.7)] z-[1] ' ></div>
            <div className=' text-white z-40 relative py-28'>
                <h2 className='font-vibes md:text-5xl text-center'>Welcome to 
                
                 </h2>
                <h3 className='font-popins text-3xl md:text-6xl my-4 md:my-8'>MRS && MRS CHEF</h3>
                <p className='font-popins leading-8 font-normal'>
                    ChoosyFoody does the business where customers have the access as far-from-home everyday food needs
                    like on a one-stop-shop.
                  <span className=' hidden md:block'> Our commitment is to collect fresh, locally produced, organic vegetables.</span>
                  </p>
                  <button className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Subscribe</button> 
            </div>
            </div>
           
            
        </div>
    );
};

export default Banner;