import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import Chef from './Chef/Chef';
import './Home.css'

const Home = () => {
    const [jsonData, setJsonData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/cData')
            .then(res => res.json())
            .then(data => setJsonData(data))
            .catch(error => console.log(error))


    }, [])
    return (
        <div>
            <Banner>
            </Banner>
            <div className=''>
                    <h2 className='fs-1 font-bold mt-5 mb-5 text-center'>Meet Our Chef</h2>
                <div className='container'>
                    {
                        jsonData.map(item => <Chef
                            key={item.id}
                            chef={item}
                        ></Chef>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Home;