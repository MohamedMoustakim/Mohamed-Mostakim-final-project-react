import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { IoLockClosedSharp } from "react-icons/io5";
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="px-6 md:px-12 py-4 flex items-center justify-between">

               
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-6 w-auto" />
                </div>

                
                <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link to="/" className="hover:border-b border-black hover:text-red-500 text-red-600 transition">Home</Link>
                    <Link to="/Shop" className="hover:border-b border-black transition">Shop</Link>
                    <Link to="/Sale" className="hover:border-b border-black transition">Sale</Link>
                    <Link to="/Features" className="hover:border-b border-black transition">Features</Link>
                    <Link to="/Blog" className="hover:border-b border-black transition">Blog</Link>
                    <Link to="/About" className="hover:border-b border-black transition">About</Link>
                    <Link to="/Contact" className="hover:border-b border-black transition">Contact</Link>
                    
                </div>

                
                <div className="hidden md:flex items-center space-x-4 text-2xl text-gray-500">
                    <Link to="/Login"><VscAccount /></Link>
                    <div className="h-6 w-px bg-gray-400"></div>
                    <Link to="/account"><IoLockClosedSharp /></Link>
                </div>

                
                <div className="md:hidden flex items-center text-2xl text-gray-700">
                    <button onClick={toggleMenu}>
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            
            {isOpen && (
                <div className="md:hidden bg-white px-6 pb-4 space-y-3 font-medium text-gray-700">
                    <Link to="/" onClick={toggleMenu} className="block hover:text-red-500">Home</Link>
                    <Link to="/Shop" onClick={toggleMenu} className="block">Shop</Link>
                    <Link to="/Sale" onClick={toggleMenu} className="block">Sale</Link>
                    <Link to="/Features" onClick={toggleMenu} className="block">Features</Link>
                    <Link to="/Blog" onClick={toggleMenu} className="block">Blog</Link>
                    <Link to="/About" onClick={toggleMenu} className="block">About</Link>
                    <Link to="/Contact" onClick={toggleMenu} className="block">Contact</Link>
                    <div className="flex space-x-4 pt-2 text-xl">
                        <Link to="/Login"><VscAccount /></Link>
                        <Link to="/account"><IoLockClosedSharp /></Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;




