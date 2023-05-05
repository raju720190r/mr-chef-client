/* eslint-disable no-unused-vars */
import React from 'react';

const VisitUs = () => {
    return (
        <div className=' mx-5 md:mx-20 my-28 grid md:grid-cols-2 '>
            <div className='mb-10 md:mb-0 flex flex-col items-center justify-center'>
                <div >
                <h2 className='text-5xl font-extrabold'>Visit Us</h2>
                <p className='my-5 text-gray-500'>103 A‐1 South US Highway 1. Jupiter. FL. 33477. (561) 743‐6283</p>
                <h4 className='mt-12 text-2xl font-bold'>Open And Closed</h4>
                <p className='text-gray-500'>Monday – Saturday <br />
                    8am – 10pm</p>
                <h4 className='mt-12 text-2xl font-bold'>PHONE</h4>
                <p className='text-gray-500'>1 (234) 567-891</p>
                </div>
            </div>
            <div>
                <img className='rounded' src="https://www1.lovethatdesign.com/wp-content/uploads/2022/05/Love-That-Design-Cala-Restaurant-Scottsdale-01-scaled.jpg" alt="" />
            </div>
        </div>
    );
};

export default VisitUs;