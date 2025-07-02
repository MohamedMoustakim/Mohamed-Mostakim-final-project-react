import React from 'react';
import caroul3 from '../assets/images-44/carousel3.webp'
import imageOure from "../assets/images-44/blog-01.jpg";
import imageOure1 from "../assets/images-44/blog-02.jpg";
import img8 from '../assets/images-44/shopy3.webp'
import img9 from '../assets/images-44/shopy4.webp'
import img10 from '../assets/images-44/shopy5.webp'
import img11 from '../assets/images-44/shopy6.webp'
import img12 from '../assets/images-44/shopy7.webp'


const Blog = () => {
    return (
        <section>
            <div className="relative w-full">
                <img
                    src={caroul3}
                    alt="Contact"
                    className="w-full h-20 sm:h-60 md:h-72 lg:h-30 xl:h-66 object-cover"
                />
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center px-4">
                    NEWS
                </h1>
            </div>
            <div className='flex flex-col gap-10 px-10 pt-10'>
                <div className="flex flex-col w-full md:w-1/3">
                    <img
                        src={imageOure}
                        alt=""
                        className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    />
                    <h1 className="text-gray-700 text-lg font-semibold mt-4 hover:text-red-400">Black Friday Guide: Best Sales & Discount <br />Codes</h1>
                    <p className="text-sm text-gray-500 mt-1 pt-2">by fashe-theme Admin on Dec 28, 2017</p>
                    <p className="text-sm text-gray-400 mt-2 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Etiam sed turpis sed lorem dignissim vulputate nec <br />cursus ante. Nunc sit...</p>
                </div>
                <div className="w-full md:w-1/3">
                    <img
                        src={imageOure1}
                        alt=""
                        className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    />
                    <h1 className="text-gray-700 text-lg font-semibold mt-4 hover:text-red-400">The White Sneakers Nearly Every Fashion <br />Girls Own</h1>
                    <p className="text-sm text-gray-500 mt-1 pt-2">by fashe-theme Admin on Dec 28, 2017</p>
                    <p className="text-sm text-gray-400 mt-2 pt-3">Duis ut velit gravida nibh bibendum commodo. Suspendisse <br />pellentesque mattis augue id euismod. <br />Interdum et...</p>
                </div>
            </div>
            <div>
                <input type="Serch all acticles" />
                <h1>Featured Products </h1>
                <div>
                    <img src={img8} alt="" />
                    <h1>Boxy7 T-Shirt with Roll <br />Sleeve</h1>
                    <p>$20.00</p>
                </div>
                <div>
                    <img src={img9} alt="" />
                    <h1>Boxy6 T-Shirt with Roll <br />Sleeve</h1>
                    <p>$20.00</p>
                </div>
                <div>
                    <img src={img10} alt="" />
                    <h1>Boxy6 T-Shirt with Roll <br />Sleeve</h1>
                    <p>$20.00</p>
                </div>
                <div>
                    <img src={img11} alt="" />
                    <h1>Boxy6 T-Shirt with Roll <br />Sleeve</h1>
                    <p>$20.00</p>
                </div>
                <div>
                    <img src={img12} alt="" />
                    <h1>Boxy6 T-Shirt with Roll <br />Sleeve</h1>
                    <p>$20.00</p>
                </div>
            </div>

        </section>

    );
};

export default Blog;