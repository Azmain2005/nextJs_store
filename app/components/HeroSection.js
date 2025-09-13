"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import posterone from '../../public/poster_1.jpg';
import postertwo from '../../public/poster-2.jpg';

export default function HeroSection() {
  const slides = [
    { id: 1, image: "/slider-1.jpg" },
    { id: 2, image: "/slider-2.jpg" },
    { id: 3, image: "/slider-3.jpg" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (

    <>
      <div className="container mx-auto h-[600px] max-sm:h-[500px] flex flex-col lg:flex-row justify-between gap-4">
        {/* Carousel */}
        <div className="relative w-full lg:w-5/5 max-sm:h-64 order-1">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}

          {/* Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2"
          >
            &#8594;
          </button>
        </div>

        {/* Two posters */}
        <div className="flex flex-col lg:flex-col w-full lg:w-1/3 gap-3 order-2 max-sm:flex-row max-sm:h-64">
          {/* Poster 1 */}
          <div className="relative w-full lg:h-2/2 max-sm:h-2/3 max-sm:w-full">
            <Image
              src={posterone}
              alt="Poster 1"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Poster 2 */}
          <div className="relative w-full lg:h-2/2 max-sm:h-2/3 max-sm:w-full">
            <Image
              src={postertwo}
              alt="Poster 2"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
        <div className=' mt-5'></div>
      <div className="container bg-white rounded-xl border-[0px] mt-3 shadow-sm p-5 flex flex-wrap justify-between items-center gap-6">
        <div className=" flex items-start space-x-3 w-full md:w-auto max-sm:shadow-[0_2px_0_rgba(0,0,0,0.1)]">
          <div className="text-yellow-500 text-3xl">
            🚚
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Rapid shipping</h3>
            <p className="text-sm text-gray-500">With a short period of time</p>
          </div>
        </div>


        <div className="flex items-start space-x-3 w-full md:w-auto max-sm:shadow-[0_2px_0_rgba(0,0,0,0.1)]">
          <div className="text-blue-500 text-3xl">
            🔒
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Secure transaction</h3>
            <p className="text-sm text-gray-500">Checkout securely</p>
          </div>
        </div>


        <div className="flex items-start space-x-3 w-full md:w-auto max-sm:shadow-[0_2px_0_rgba(0,0,0,0.1)]">
          <div className="text-indigo-500 text-3xl">
            📞
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">24/7 support</h3>
            <p className="text-sm text-gray-500">Ready to pickup calls</p>
          </div>
        </div>


        <div className="flex items-start space-x-3 w-full md:w-auto max-sm:shadow-[0_2px_0_rgba(0,0,0,0.1)]">
          <div className="text-green-500 text-3xl">
            🛒
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Bundle offer</h3>
            <p className="text-sm text-gray-500">On many products</p>
          </div>
        </div>
      </div>

    </>

  );
}
