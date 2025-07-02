
import React from "react";
import bgshop from "../assets/images-44//banner.webp";
import { FaSearch } from "react-icons/fa";
shopImages
import data from "../contants/data";
import  { shopImages } from "../contants/images";
const Shop = () => {
    const ShopData = data
    return (
        <main className="flex flex-col gap-20">
            <div
                style={{ backgroundImage: `url(${bgshop})` }}
                className="  bg-cover bg-centre h-[35vh] flex flex-col items-center py-10 "
            >
                <h1 className="text-7xl font-bold text-[white]">PRODUCTS</h1>
            </div>
            <div className="flex px-10 ">
                <div className="w-[20%] h-200 flex flex-col gap-10 ">
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="text-[#333333] text-xl font-bold ">Categories</h1>
                        <div className="flex flex-col items-start gap-2">
                            <a className="text-[#888897] hover:text-[#e65540] " href="">
                                Best Seller (8 items)
                            </a>
                            <a className="text-[#888897] hover:text-[#e65540] " href="">
                                Featured (8 items)
                            </a>
                            <a className="text-[#888897] hover:text-[#e65540] " href="">
                                Men (8 items)
                            </a>
                            <a className="text-[#888897] hover:text-[#e65540] " href="">
                                Women (8 items)
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="text-[#333333] text-xl font-bold ">Colors</h1>
                        <div className="flex flex-col items-start gap-2">
                            <div className="flex justify-center gap-1">
                                <input type="checkbox" />
                                <label
                                    className="text-[#666666] hover:text-[#e65540] "
                                    htmlFor=""
                                >
                                    Black
                                </label>
                            </div>
                            <div className="flex justify-center gap-1">
                                <input type="checkbox" />
                                <label
                                    className="text-[#666666] hover:text-[#e65540] "
                                    htmlFor=""
                                >
                                    Gray
                                </label>
                            </div>
                            <div className="flex justify-center gap-1">
                                <input type="checkbox" />
                                <label
                                    className="text-[#666666] hover:text-[#e65540] "
                                    htmlFor=""
                                >
                                    Red
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="text-[#333333] text-xl font-bold ">Prices</h1>
                        <div className="flex flex-col items-start gap-2">
                            <div className="flex justify-center gap-1">
                                <input type="checkbox" />
                                <label
                                    className="text-[#666666] hover:text-[#e65540] "
                                    htmlFor=""
                                >
                                    0-20
                                </label>
                            </div>
                            <div className="flex justify-center gap-1">
                                <input type="checkbox" />
                                <label
                                    className="text-[#666666] hover:text-[#e65540] "
                                    htmlFor=""
                                >
                                    20-40
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h1 className="text-[#333333] text-xl font-bold ">Size</h1>
                        <div className="flex flex-col items-start gap-2">
                            <div className="flex justify-center gap-1">
                                <input type="checkbox" />
                                <label
                                    className="text-[#666666] hover:text-[#e65540] "
                                    htmlFor=""
                                >
                                    S
                                </label>
                            </div>
                            <div className="flex justify-center gap-1">
                                <input type="checkbox" />
                                <label
                                    className="text-[#666666] hover:text-[#e65540] "
                                    htmlFor=""
                                >
                                    M
                                </label>
                            </div>
                            <div className="flex justify-center gap-1">
                                <input type="checkbox" />
                                <label
                                    className="text-[#666666] hover:text-[#e65540] "
                                    htmlFor=""
                                >
                                    L
                                </label>
                            </div>
                            <div className="flex justify-center gap-1">
                                <input type="checkbox" />
                                <label
                                    className="text-[#666666] hover:text-[#e65540] "
                                    htmlFor=""
                                >
                                    XL
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="relative  ">
                        <input
                            className="w-[70%] px-5 h-15 border-1 border-[#e6e6e6] "
                            placeholder="...search"
                            type="search"
                        />
                        <FaSearch className="absolute bottom-5 right-22  " />
                    </div>
                </div>
                <div className="w-[80%] flex flex-col gap-10 items-center ">
                    <div className="flex justify-between w-full items-center">
                        <div className="flex justify-center items-center gap-5">
                             <select className="border-2 border-[#e6e6e6] text-gray-500 px-4 w-50 h-10" name="options" id="mySelect">
                                <option value="option1">Alphabetically, A-Z</option>
                                <option value="option2">Featred</option>
                                <option value="option3">best selling</option>
                                <option value="option4">Alphabetically, Z-A</option>
                                <option value="option5">Price, hight to low</option>
                                <option value="option6">Price, low to hight</option>
                                <option value="option7">Date, new to old</option>
                                <option value="option8">Date, old to new</option>
                            </select>
                            <select className="border-2 border-[#e6e6e6] text-gray-500 px-4 w-50 h-10" name="options" id="mySelect">
                                <option value="option1">10</option>
                                <option value="option2">20</option>
                                <option value="option3">30</option>
                                <option value="option4">40</option>
                            </select>
                        </div>
                        <p className="text-[#938a88]">Showing 1 to 6 of 8 items</p>
                    </div>
                    <div className="flex flex-wrap  items-center w-full justify-between gap-y-10 ">
                        {ShopData.Data3.map((shop) => (
                            <div
                                className="flex flex-col items-start w-[31%]"
                                key={shop.id}
                            >
                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4 relative group">
                                    <img
                                        src={shopImages[shop.image]}
                                        className="w-full object-cover transition duration-300 group-hover:opacity-70"
                                    />

                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-300"></div>

                                    <button
                                        className="absolute left-1/2 -translate-x-1/2 bottom-4 px-4 py-2 bg-[#111111] cursor-pointer hover:bg-[#e65540] text-white rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                <p className="text-[#5f5f5f] text-md font-semibold ">
                                    {shop.description}
                                </p>
                                <p className="text-[#5f5f5f] text-md font-semibold ">
                                    {shop.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Shop;