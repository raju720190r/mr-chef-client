import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../Register/Register';

const Login = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold'>Login Section</h2>
            <Link to="/register">Register</Link>
        </div>
    );
};

export default Login;