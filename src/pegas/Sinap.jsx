// import React from 'react';

// const Sinap = () => {
//     return (
//         <div>
//             huiguijn
//         </div>
//     );
// };

// export default Sinap;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";

const Sinap = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !password) {
            alert("Please fill all fields");
            return;
        }

        const newUser = { firstName, lastName, email, password };
        localStorage.setItem("user", JSON.stringify(newUser));

        alert("Account created successfully!");
        navigate("/Login");
    };

    return (
        <main className='flex flex-col items-start gap-5 px-10 '>
            <form onSubmit={handleSignUp} className='flex flex-col gap-5 w-full'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-4xl'>Create Account</h1>
                    <p className='text-xl'>Your Personal Details</p>
                </div>

                <div className='flex flex-col items-start gap-3 '>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        className='w-[70vw] border-[grey] h-10 border-1 p-5'
                        placeholder='First Name'
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className='flex flex-col items-start gap-3 '>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        className='w-[70vw] border-[grey] h-10 border-1 p-5'
                        placeholder='Last Name'
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className='flex flex-col items-start gap-3 '>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        className='w-[70vw] border-[grey] h-10 border-1 p-5'
                        placeholder='Email'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='flex flex-col items-start gap-3 '>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        className='w-[70vw] border-[grey] h-10 border-1 p-5'
                        placeholder='Password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className='flex justify-start items-center gap-5'>
                    <div className='flex justify-center items-center relative'>
                        <button type="submit" className='w-30 h-10 bg-[black] text-[white]'>
                            Create
                        </button>
                        <FaRegUser className='absolute text-[white] right-3' />
                    </div>
                    <Link to="/">or Return to home</Link>
                </div>
            </form>
        </main>
    );
};

export default Sinap;