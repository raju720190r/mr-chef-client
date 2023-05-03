import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Layout.css'

const Layout = () => {
    return (
        <>
            <Header></Header>
            <div className='outlet min-h-[calc(100vh-155px)]'>
                <Outlet></Outlet>
                </div>
            {/* <Footer></Footer> */}
        </>
    );
};

export default Layout;