import React from 'react';
import banner from '../assets/images-44/banner.webp'

const Shop = () => {
    return (
        <div className="relative w-full">
            <img
                src={banner} 
                className="w-full h-60 object-cover"
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                PRODUCTS
            </h1>
        </div>

    );
};

export default Shop;