/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";

const CarouselItem = ({ imgSrc, title, description }) => (
  <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4">
    <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden h-full">
      <div className="relative aspect-[4/3] sm:aspect-video">
        <img 
          src={imgSrc} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-[#4F9153] mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-[#5C8374]">{description}</p>
      </div>
    </div>
  </div>
);

const InfiniteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const carouselItems = [
    {
      imgSrc: "https://navkargum.com/wp-content/uploads/2024/04/guar-split-1.jpg",
      title: "Guar Split",
      description: "High-quality chickpeas sourced from select farms"
    },
    {
      imgSrc: "https://cdn.britannica.com/66/212766-050-FF1A49A0/sesame-seeds-wooden-spoon.jpg",
      title: "Sesame Seeds",
      description: "Sustainably grown grains for your needs"
    },
    {
      imgSrc: "https://rajatagro.com/wp-content/uploads/2024/03/Masoor-Dal-1-1024x683.jpg",
      title: "Masoor Dal",
      description: "Aromatic spices from the finest regions"
    },
    {
      imgSrc: "https://i.pinimg.com/736x/ed/57/b2/ed57b2615534937d6790b4969c0be828.jpg",
      title: "India Dal Grains",
      description: "Rigorous quality standards for all products"
    }
  ];

  const totalItems = carouselItems.length;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      if (width < 640) setSlidesToShow(1);
      else if (width < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  }, [totalItems]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, nextSlide]);

  return (
    <div className="bg-[#E7F3EF]/30 py-8 sm:py-12 lg:py-20">
      <div className="container mx-auto px-4 relative">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4F9153] mb-2 sm:mb-4">
            Featured Highlights
          </h2>
          <p className="text-sm sm:text-base text-[#5C8374]">
            Discover our exceptional range of agricultural products
          </p>
        </div>

        <div className="relative group">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {[...carouselItems, ...carouselItems].map((item, index) => (
                <CarouselItem key={index} {...item} />
              ))}
            </div>
          </div>

          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute cursor-pointer left-0 sm:left-4 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50 z-10"
                onMouseEnter={() => setIsAutoplay(false)}
                onMouseLeave={() => setIsAutoplay(true)}
              >
                <div className="w-4 h-4 sm:w-6 sm:h-6" >
                  <img src="https://img.icons8.com/?size=100&id=26146&format=png&color=40C057" className="h-full w-full" alt="" />
                </div>
              </button>
              <button
                onClick={nextSlide}
                className="absolute cursor-pointer right-0 sm:right-4 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50 z-10"
                onMouseEnter={() => setIsAutoplay(false)}
                onMouseLeave={() => setIsAutoplay(true)}
              >
                <div className="w-4 h-4 sm:w-6 sm:h-6 " >
                  <img src="https://img.icons8.com/?size=100&id=26147&format=png&color=40C057" className="h-full w-full" alt="" />
                </div>
              </button>
            </>
          )}

          <div className="flex justify-center mt-4 sm:mt-6 gap-1 sm:gap-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#4F9153] w-3 sm:w-4' : 'bg-[#4F9153]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
