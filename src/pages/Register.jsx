/* eslint-disable no-unused-vars */
import { Card, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { FaExclamation } from "react-icons/fa";
const Register = () => {
    const { resgisterWithEmailPassword, logOut } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        resgisterWithEmailPassword(email, password)
            .then(res => {
                const createUser = res.user;

                updateProfile(createUser, {
                    displayName: name, photoURL: photo
                });
                logOut();
                navigate('/login');
                form.reset();

            })
            .catch(err => setError(err.message));
    };

    return (
        <div className="max-w-sm mt-28 mx-auto shadow-xl ">
            <Card className='bg-gray-300 mb-5'>
                <div className='text-red-700 flex space-x-2'> {error && <FaExclamation className='w-5 h-5 text-teal-950'></FaExclamation>} <span>{error}</span> </div>
                <form className="flex flex-col gap-4" onSubmit={handleRegister}>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            name='name'
                            placeholder='Name'
                            required={false}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            name='email'
                            placeholder="email@.com"
                            required={true}

                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            name='password'
                            placeholder='Password'
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="photo"
                                value="Your photo url"
                            />
                        </div>
                        <TextInput
                            id="photo"
                            type="text"
                            name='photo'
                            placeholder='PhotoURL'
                            required={false}
                        />
                    </div>

                    <button type="submit" className='btn-primary'>
                        Register
                    </button>
                </form>
                <span>Allready have an account <Link to='/login' className=' text-blue-500 font-semibold underline'>Login</Link></span>
            </Card>
        </div>
    );
};

export default Register;