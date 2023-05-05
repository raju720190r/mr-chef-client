/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import logo from '/assets/cf-logo.png';
import { Link, NavLink, Navigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Loader from './Loader';

const Header = ({ login }) => {
    
    const { user, logOut ,loading } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    };
    // if (loading) {
    //     return <Loader/>
    // }
    return (

        <div style={login && { background: 'black', top: '0' }} className="md:px-20  w-full absolute  font-popins text-white top-5 right-0  z-50">
            <Navbar
                fluid={true}
                rounded={true}
                style={{ background: 'transparent' }}
            >
                <Link to='/'>
                    <h2 className='text-2xl'>MR&MRS CHEF</h2>
                </Link>

                <div className="flex md:order-2">
                    { user?
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="user" img={user?.photoURL} rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {
                                    user?.displayName
                                }
                            </span>
                            <span className="block truncate text-sm font-medium">
                            {user?.email}
                            </span>
                        </Dropdown.Header>
                        
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            <button onClick={handleLogOut}>Sign out</button>
                        </Dropdown.Item>
                    </Dropdown> :
                     <Link to='/login' className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Login</Link>
                    }

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse  className='bg-white md:bg-inherit p-8 md:p-0'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'text-orange-300 text-xl' : ' text-black md:text-inherit text-xl')}>
                        Home
                    </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-orange-300 text-xl' : 'text-black md:text-inherit text-xl')}>
                        Blog
                    </NavLink>
                    <NavLink to='' className= 'text-primary text-xl md:text-inherit'>
                        Contact
                    </NavLink>
                    

                </Navbar.Collapse>
            </Navbar>

        </div>

    );
};

export default Header;
