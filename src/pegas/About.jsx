import React from 'react';
import conta from '../assets/images-44/carousel2.jpg'

const About = () => {
    return (
        <section>
            <div className="relative w-full">
                <img
                    src={conta}
                    alt="Contact"
                    className="w-full h-40 sm:h-60 md:h-72 lg:h-80 xl:h-66 object-cover"
                />
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center px-4">
                    ABOUT
                </h1>
            </div>
            <div>
                
            </div>
        </section>
    );
};

export default About;