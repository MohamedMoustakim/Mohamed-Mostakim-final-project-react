// import React from 'react';

// const Home = () => {
//     return (
//         <div>
//             hvv
//         </div>
//     );
// };

// export default Home;

import { useRef, useState, useEffect } from "react";


import carousel1 from "../assets/images-44/carousel1.jpg";
import carousel2 from "../assets/images-44/carousel2.jpg";
import carousel3 from "../assets/images-44/carousel3.webp";
import images from "../contants/images";
import Data from "../contants/data";
import bg1 from "../assets/images-44/bg-video-01.jpg.webp";
import bg2 from "../assets/images-44/shop-item-09.jpg";
import imageOure from "../assets/images-44/blog-01.jpg";
import imageOure1 from "../assets/images-44/blog-02.jpg";
import imageOure2 from "../assets/images-44/blog-03.jpg";

bg1, bg2;
import { shopImages } from "../contants/images";

const slidesData = [
    {
        img: carousel1,
        name: "New Arrivals",
        title: "Women Collection 2025",
        desc: "SHOP NOW",
    },
    {
        img: carousel2,
        name: "New Arrivals",
        title: "Women Collection 2025",
        desc: "SHOP NOW",
    },
    {
        img: carousel3,
        name: "New Arrivals",
        title: "Women Collection 2025",
        desc: "SHOP NOW",
    },
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const autoAdvanceRef = useRef();
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        autoAdvanceRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesData.length);
        }, 5000);
        return () => clearInterval(autoAdvanceRef.current);
    }, []);

    useEffect(() => {
        // Reset timer on slide change
        clearInterval(autoAdvanceRef.current);
        autoAdvanceRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesData.length);
        }, 5000);
        return () => clearInterval(autoAdvanceRef.current);
    }, [currentSlide]);

    // Touch events for swipe
    useEffect(() => {
        const handleTouchStart = (e) => {
            touchStartX.current = e.changedTouches[0].screenX;
        };
        const handleTouchEnd = (e) => {
            touchEndX.current = e.changedTouches[0].screenX;
            handleSwipe();
        };
        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX.current - touchEndX.current;
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        };
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener("touchstart", handleTouchStart, {
                passive: true,
            });
            carousel.addEventListener("touchend", handleTouchEnd, { passive: true });
        }
        return () => {
            if (carousel) {
                carousel.removeEventListener("touchstart", handleTouchStart);
                carousel.removeEventListener("touchend", handleTouchEnd);
            }
        };
        // eslint-disable-next-line
    }, [carouselRef, currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + slidesData.length) % slidesData.length
        );
    };
    const Mydata = Data.Data1;
    // Featured products data for React rendering
    const featuredCards = [
        {
            id: 1,
            image: "img7",
            description: "Boxy3 T-Shirt with Roll Sleeve",
            price: "$ 20.00",
        },
        {
            id: 2,
            image: "img8",
            description: "Boxy3 T-Shirt with Roll Sleeve",
            price: "$ 20.00",
        },
        {
            id: 3,
            image: "img9",
            description: "Boxy3 T-Shirt with Roll Sleeve",
            price: "$ 20.00",
        },
        {
            id: 4,
            image: "img10",
            description: "Boxy3 T-Shirt with Roll Sleeve",
            price: "$ 20.00",
        },
        {
            id: 5,
            image: "img11",
            description: "Boxy3 T-Shirt with Roll Sleeve",
            price: "$ 20.00",
        },
        {
            id: 6,
            image: "img12",
            description: "Boxy3 T-Shirt with Roll Sleeve",
            price: "$ 20.00",
        },
        {
            id: 7,
            image: "img13",
            description: "Boxy3 T-Shirt with Roll Sleeve",
            price: "$ 20.00",
        },
    ];

    return (
        <main className="flex flex-col items-center overflow-hidden  gap-[5rem]">
            <div className="fixed inset-0 -z-10">
                <div className="absolute  "></div>
                <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 rounded-full filter blur-3xl"></div>
            </div>

            <div className="w-full max-w-6xl mx-auto">
                <div className="carousel-container relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden z-20">
                        <div
                            className="progress-bar absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
                            style={{
                                width: `${((currentSlide + 1) / slidesData.length) * 100}%`,
                            }}
                        ></div>
                    </div>
                    <button
                        className="nav-button absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white touch-manipulation"
                        title="Previous slide"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        type="button"
                    >
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            ></path>
                        </svg>
                    </button>

                    <button
                        className="nav-button absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white touch-manipulation"
                        title="Next slide"
                        onClick={nextSlide}
                        aria-label="Next slide"
                        type="button"
                    >
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </button>

                    <div
                        className="carousel-track relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
                        ref={carouselRef}
                    >
                        {slidesData.map((slide, idx) => {
                            let className =
                                "carousel-item absolute top-0 left-0 w-full h-full";
                            if (idx === currentSlide) className += " active";
                            else if (idx === (currentSlide + 1) % slidesData.length)
                                className += " next";
                            else if (
                                idx ===
                                (currentSlide - 1 + slidesData.length) % slidesData.length
                            )
                                className += " prev";
                            else className += " hidden";
                            return (
                                <div className={className} key={idx}>
                                    <div className="w-full h-full p-4 sm:p-8">
                                        <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                                            <img
                                                src={slide.img}
                                                name={slide.name}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} mix-blend-overlay`}
                                            ></div>
                                            <div className="absolute inset-x-0 gap-5  flex flex-col items-center bottom-40 p-4 sm:p-8">
                                                <p className="text-white text-xl sm:text-xl md:text-2xl  mb-2 sm:mb-3">
                                                    {slide.title}
                                                </p>
                                                <h1 className="text-[white] text-8xl font-bold ">
                                                    {slide.name}
                                                </h1>
                                                <button className="bg-[#ffffff] hover:bg-[#e65540] w-40 h-10 rounded-3xl text-sm sm:text-base cursor-pointer md:text-lg max-w-2xl">
                                                    {slide.desc}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
                        {slidesData.map((_, idx) => (
                            <button
                                key={idx}
                                className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${idx === currentSlide ? "bg-white/40" : "bg-white/20"
                                    } hover:bg-white/60`}
                                title={`Go to slide ${idx + 1}`}
                                onClick={() => setCurrentSlide(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                type="button"
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10 px-10 py-10 w-full h-full ">
                {Mydata.map((item, index) => (
                    <div
                        key={index}
                        className="w-[30%] h-full flex flex-col items-center relative "
                    >
                        <img
                            className="w-full h-100 hover:scale-105 duration-500 "
                            src={images[item.image]}
                            alt=""
                        />
                        <button className="w-45 h-10 absolute bottom-5 right-22 cursor-pointer hover:bg-[#e75b47] hover:text-[white] duration-500 bg-[#fdfdfc]/95 ">
                            {item.name}
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center gap-5  w-[100vw] ">
                <h1 className="font-bold text-3xl">FEATURED PRODUCTS</h1>
                <div
                    className=" mb-4  w-[85%] relative "
                    style={{ overflowY: "hidden" }}
                >
                    <div
                        className="flex snap-x snap-mandatory gap-4"
                        style={{ width: "max-content" }}
                    >
                        {featuredCards.map((card) => (
                            <div
                                className="flex flex-col items-start gap-3 w-64"
                                key={card.id}
                            >
                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4">
                                    <img
                                        src={shopImages[card.image]}
                                        alt=""
                                        className="w-full  object-cover"
                                    />
                                </div>
                                <p className="text-[#5f5f5f] text-md font-semibold ">
                                    {card.description}
                                </p>
                                <p className="text-[#5f5f5f] text-md font-semibold ">
                                    {card.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-10 px-10 py-10 bg-[#f2f2f2] w-full ">
                <div
                    style={{ backgroundImage: `url(${bg1})` }}
                    className="w-[50%] h-100 bg-cover bg-no-repeat object-cover bg-center hover:bg-size-[50rem]  flex flex-col items-center relative "
                >
                    <div className="absolute flex flex-col items-center gap-3 top-36">
                        <h3 className="text-[white] text-4xl font-bold " >The Beauty</h3>
                        <h1 className="text-[white] text-7xl font-bold " >Lookbook</h1>
                        <a className="text-[white] text-2xl " href="#">VIEW COLLECTION</a>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${bg2})` }}
                    className="w-[50%] h-100 bg-cover object-cover bg-center hover:bg-size-[37rem]  flex flex-col items-center relative "
                >
                    <div className="absolute flex flex-col items-center gap-8 top-60 ">
                        <div className="flex flex-col items-center">
                            <p className="text-[#919391] hover:text-red-300">Boxy2 T-Shirt with Roll Sleeve</p>
                            <h1 className="text-[#5d5e5d]">$20.00</h1>
                        </div>
                        <div className="flex gap-3 items-center  ">
                            <div className=" flex items-center flex-col border-1 border-gray-300 px-3 py-2 ">
                                <h1 className="text-xl font-light">-2374</h1>
                                <p className="text-[#a99b99]">days</p>
                            </div>
                            <div className="border-1 border-gray-300 px-4 py-2 ">
                                <h1 className="text-xl font-light">-12</h1>
                                <p className="text-[#a99b99]">hrs</p>
                            </div>
                            <div className="border-1 border-gray-300 px-4 py-2 ">
                                <h1 className="text-xl font-light">-55</h1>
                                <p className="text-[#a99b99]">mins</p>
                            </div>
                            <div className="border-1 border-gray-300 px-4 py-2 ">
                                <h1 className="text-xl font-light">-14</h1>
                                <p className="text-[#a99b99]">secs</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <section className="py-20 ">
                <div className="container mx-auto px-4">

                    
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
                        Our Blog
                    </h1>

                    <div className="flex flex-col md:flex-row items-start justify-between gap-10">
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

                        <div className="w-full md:w-1/3">
                            <img
                                src={imageOure2}
                                alt=""
                                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            />
                            <h1 className="text-gray-700  font-semibold mt-4 hover:text-red-400">New York SS 2018 Street Style: By Annina <br />Mislin</h1>
                            <p className="text-sm text-gray-500 mt-1 pt-2">by fashe-theme Admin on Dec 28, 2017</p>
                            <p className="text-sm text-gray-400 mt-2 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Etiam sed turpis sed lorem dignissim vulputate nec <br />cursus ante. Nunc sit...</p>
                        </div>
                    </div>

                </div>
            </section>
            
            <section className="py-5 ">
                <div className="container mx-auto px-4">

                    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
                        @ FOLLOW US ON INSTAGRAM
                    </h1>
                    <div className="flex items-center gap-20 py-10">
                        <div className="flex items-center gap-20 py-10 divide-x divide-gray-300">
                            <div className="flex items-center flex-col px-10">
                                <h1 className="font-light text-xl">Free Delivery Worldwide</h1>
                                <p className="text-gray-400 italic">Mirum est notare quam littera gothica</p>
                            </div>

                            <div className="flex items-center flex-col px-10">
                                <h1 className="font-light text-xl">30 Days Return</h1>
                                <p className="text-gray-400 italic">Simply return it within 30 days for an exchange.</p>
                            </div>

                            <div className="flex items-center flex-col px-8">
                                <h1 className="font-light text-xl">Store Opening</h1>
                                <p className="text-gray-400 italic">Shop open from Monday to Sunday</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


        </main>

    );
};

export default Home;




