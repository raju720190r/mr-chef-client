/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Chef from './Chef';
import { Button, Spinner } from 'flowbite-react';

const Chefs = () => {
   
    const [chefs, setChefs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setIsLoading(false);
            });
    }, []);



    return (
        <div className=' mt-14 md:mt-28 md:px-20 mb-10'>

            <div className="section-title  grid grid-cols-1 justify-center items-center ">
                <div className=''>
                    <h3 className='text-center font-medium text-6xl my-3 underline'><a href="#" className='font-semibold text-gray-900 underline dark:text-white decoration-gray-300'>Meet Our Chef</a></h3>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20">
                {
                    chefs.map(chef => <Chef chef={chef} key={chef.id} />)
                }
            </div>
        </div>
    );
};

export default Chefs;