import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoPinterest } from "react-icons/io";
import { FaGooglePlusG } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="bg-[#f0f0f0] text-white px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                
                <div className='flex items-center flex-col'>
                    <h1 className="text-black font-semibold mb-4 pr-7">GET IN TOUCH</h1>
                    <p className="text-[#888888] mb-4 pl-9">
                        Any questions? Let us know in store at 8th floor, 379<br />
                        Hudson St, New York, NY 10018 or call us on (+1) 96 716<br />
                        6879
                    </p>
                    <div className="flex gap-5 mt-2 text-2xl pl-9">
                        <FaFacebookF className="text-[#888888] hover:text-red-500 cursor-pointer transition duration-200" />
                        <IoLogoTwitter className="text-[#888888] hover:text-red-500 cursor-pointer transition duration-200" />
                        <IoLogoPinterest className="text-[#888888] hover:text-red-500 cursor-pointer transition duration-200" />
                        <FaGooglePlusG className="text-[#888888] hover:text-red-600 cursor-pointer transition duration-200" />
                        <IoLogoInstagram className="text-[#888888] hover:text-red-500 cursor-pointer transition duration-200" />
                    </div>
                </div>

                
                <div>
                    <h1 className="text-black font-semibold mb-4">CATEGORIES</h1>
                    <ul className="space-y-2 text-[#888888]">
                        <li className="hover:text-red-400 cursor-pointer">Men</li>
                        <li className="hover:text-red-400 cursor-pointer">Women</li>
                        <li className="hover:text-red-400 cursor-pointer">Dresses</li>
                        <li className="hover:text-red-400 cursor-pointer">Sunglasses</li>
                    </ul>
                </div>

                
                <div>
                    <h1 className="text-black font-semibold mb-4">LINKS</h1>
                    <ul className="space-y-2 text-[#888888]">
                        <li className="hover:text-red-400 cursor-pointer">Search</li>
                        <li className="hover:text-red-400 cursor-pointer">About Us</li>
                        <li className="hover:text-red-400 cursor-pointer">Contact Us</li>
                        <li className="hover:text-red-400 cursor-pointer">Returns</li>
                    </ul>
                </div>

                
                <div>
                    <h1 className="text-black font-semibold mb-4">HELP</h1>
                    <ul className="space-y-2 text-[#888888]">
                        <li className="hover:text-red-400 cursor-pointer">Track Order</li>
                        <li className="hover:text-red-400 cursor-pointer">Returns</li>
                        <li className="hover:text-red-400 cursor-pointer">Shipping</li>
                        <li className="hover:text-red-400 cursor-pointer">FAQs</li>
                    </ul>
                </div>

               
                <div>
                    <h1 className="text-black font-semibold mb-4">NEWSLETTER</h1>
                    <input
                        type="email"
                        placeholder="email Address"
                        className="w-full px-3 py-2 mb-3 text-black rounded outline-none"
                    />
                    <button className="bg-[#111111] text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200">
                        SUBSCRIBE
                    </button>
                </div>
            </div>

            
            <div className="mt-10 text-center text-sm pt-5">
                <p className='text-[#888888]'>
                    <span className='text-[#b0adad]'>Copyright © 2022</span> <span className='hover:text-red-400'>Shopify Theme Developed by MassTechnologist.</span>
                    <span className='text-[#b0adad]'> All rights reserved.</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
