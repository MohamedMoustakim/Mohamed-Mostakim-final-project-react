// import React from 'react';

// const Login = () => {
//     return (
//         <div>
//             gvuhbvuy
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (
            storedUser &&
            email === storedUser.email &&
            password === storedUser.password
        ) {
            alert("Login successful!");
            navigate("/");
        } else {
            alert("Incorrect email or password!");
        }
    };

    return (
        <main className="flex justify-center items-start gap-10 p-10">
            <div className="w-[40%] flex gap-3 flex-col items-start border-1 p-5 border-[grey] ">
                <h1 className="text-4xl">New Customer</h1>
                <p className="font-bold text-[grey]">Register Account</p>
                <p className="text-[grey]">
                    By creating an account you will be able to shop faster, be up to date
                    on an order's status, and keep track of the orders you have previously
                    made.
                </p>
                <Link to="/Sinap">
                    <button className="w-35 cursor-pointer h-13 border-2 bg-[black] text-[white] ">
                        Continue
                    </button>
                </Link>
            </div>

            <div className="relative mx-auto w-[50%] max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                <div className="w-full">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
                        <p className="mt-2 text-gray-500">
                            Sign in below to access your account
                        </p>
                    </div>
                    <div className="mt-5">
                        <form onSubmit={handleLogin}>
                            <div className="relative mt-6">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email Address"
                                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                    autoComplete="NA"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label
                                    htmlFor="email"
                                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                                >
                                    Email Address
                                </label>
                            </div>

                            <div className="relative mt-6">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label
                                    htmlFor="password"
                                    className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                                >
                                    Password
                                </label>
                            </div>

                            <div className="my-6">
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                                >
                                    Sign in
                                </button>
                            </div>

                            <p className="text-center text-sm text-gray-500">
                                Don't have an account yet?{" "}
                                <Link
                                    to="/Sinap"
                                    className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                                >
                                    Sign up
                                </Link>
                                .
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;