import React from 'react';
import conta from '../assets/images-44/carousel2.jpg'
import aboutImg from "../assets/images-44/shopy4.webp";

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
            <div className="max-w-6xl mx-auto px-6 py-12 font-sans">

                <div className="flex flex-col md:flex-row gap-20 items-start">

                    <div className="w-full md:w-90.5 overflow-hidden  shadow">
                        <img
                            src={aboutImg}
                            alt="Our Story"
                            className="w-full h-150 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-90 cursor-pointer"
                            draggable={false}
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl font-light mb-6">Our story</h1>
                        <p className="text-gray-400 flex items-center font-light mb-6">
                            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
                            Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
                            dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
                            porta est ac neque bibendum viverra. Vivamus lobortis magna ut
                            interdum laoreet. Donec gravida lorem elit, quis condimentum ex
                            semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
                            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
                            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
                            lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
                            pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
                            vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
                            efficitur, quam velit convallis ipsum, et maximus enim ligula ac
                            ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices
                            orci.
                        </p>
                        <div className="border-l-4 border-gray-200 ">
                            <blockquote className="text-xl italic text-gray-400 mb-4 font-light ml-4">
                                "Creativity is just connecting things. When you ask creative people
                                how they did something, they feel a little guilty because they
                                didn't really do it. They just saw something. It seemed obvious to
                                them after a while."
                            </blockquote>
                            <p className="font-medium mb-6 text-gray-500 ml-4">- Steve Jobs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;