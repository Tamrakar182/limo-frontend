"use client";

import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import BlurImage from '@/modules/common/components/blur-image';

const images = [
    '/banner/airport-service.jpeg',
    '/banner/lb2.jpg',
    '/banner/lb3.jpg',
];

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen">
            <div className="absolute inset-0">
                <BlurImage
                    src={images[currentImage]}
                    alt="Background image"
                    sizes='100vw'
                    fill
                    className="transition-opacity duration-1000 object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center px-6 justify-center h-full text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold">
                    WE ONLY SERVE 2022 & UP LUXURIOUS SUV&apos;S AND SEDAN&apos;S
                </h1>
                <p className="mt-4 text-lg md:text-xl">
                    The Epitome of Luxury Travel. Experience VIP Treatment with Our Airport Limo Service. Arrive in Style and Comfort. Click Below To Reserve Your Luxury Limo Ride Today and Experience An Unforgettable Journey With Us & Get Your Quotation.
                </p>
                <div className="hidden md:flex mt-8 w-full max-w-4xl mx-auto bg-gray-900 bg-opacity-75 p-4 rounded-lg">
                    <div className="flex-1 p-2">
                        <label className="block text-sm font-semibold">Pickup Point</label>
                        <div className="flex items-center mt-2">
                            <FaMapMarkerAlt className="mr-2" />
                            <input type="text" className="w-full p-2 bg-transparent border-b border-gray-500 focus:outline-none" placeholder="Pickup Point" />
                        </div>
                    </div>
                    <div className="flex-1 p-2">
                        <label className="block text-sm font-semibold">Pickup Date Time</label>
                        <div className="flex items-center mt-2">
                            <FaCalendarAlt className="mr-2" />
                            <input type="date" className="w-1/2 p-2 bg-transparent border-b border-gray-500 focus:outline-none" />
                            <FaClock className="ml-4 mr-2" />
                            <input type="time" className="w-1/2 p-2 bg-transparent border-b border-gray-500 focus:outline-none" />
                        </div>
                    </div>
                    <div className="flex-1 p-2">
                        <label className="block text-sm font-semibold">Drop Off Point</label>
                        <div className="flex items-center mt-2">
                            <FaMapMarkerAlt className="mr-2" />
                            <input type="text" className="w-full p-2 bg-transparent border-b border-gray-500 focus:outline-none" placeholder="Dropoff Point" />
                        </div>
                    </div>
                    <div className="flex items-center p-2">
                        <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg">Search</button>
                    </div>
                </div>
                <button className="md:hidden mt-8 px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg">
                    Reserve Now
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
