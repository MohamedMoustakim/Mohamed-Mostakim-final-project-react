import React from 'react';
import { Link } from 'react-router-dom';
import { GoChevronRight } from "react-icons/go";

const Sale = () => {
    return (
        <div className='flex flex-col py-15 px-10 gap-10'>
            <div className='flex items-center gap-2 text-gray-500 font-light text-1xl '>
                <h1 className='hover:text-red-500'><Link to="/">Home</Link></h1>
                <span className='pt-1 hover:text-red-500'><GoChevronRight /></span>
                <h1 className='hover:text-red-500'><Link to="/Sale">Search</Link></h1>
            </div>
            <p className='font-light text-4xl'>Search</p>
        </div>
    );
};

export default Sale;