import React from 'react';
import conta from '../assets/images-44/carousel2.jpg'
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Form submitted!");
    };
    return (
        <section>
            <div className="relative w-full">
                <img
                    src={conta}
                    alt="Contact"
                    className="w-full h-40 sm:h-60 md:h-72 lg:h-80 xl:h-66 object-cover"
                />
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center px-4">
                    CONTACT
                </h1>
            </div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe

                            width="100%"
                            height="100%"
                            className="absolute inset-0 bg-amber-400"
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.5421207029895!2d-7.536426625207058!3d33.603792641278325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e1!3m2!1sfr!2sma!4v1751452904944!5m2!1sfr!2sma"
                            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                        ></iframe>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="lg:w-1/3 md:w-1/2 bg-white flex flex-col gap-7 md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                    >
                        <h2 className="text-gray-900 text-3xl mb-1 font-light title-font">Send us your message</h2>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input
                                type="Name"
                                id="name"
                                name="name"
                                className="w-full bg-white rounded border border-gray-300  focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300  focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300  focus:ring-2  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button className="bg-[#111111] text-white px-4 py-2 w-40 rounded-4xl hover:bg-red-600 transition duration-200">
                            SUBSCRIBE
                        </button>

                    </form>
                </div>
            </section>



        </section>
    );
};

export default Contact;