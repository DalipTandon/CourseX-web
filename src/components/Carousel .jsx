import { useState } from 'react';

import pic1 from "../../img/demo2.jpg"
import pic2 from "../../img/demo1.png"
import pic3 from "../../img/demo3.jpg"
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 4;

    // Function to go to the next slide
    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
    };

    // Function to go to the previous slide
    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 1 ? totalSlides : prevSlide - 1));
    };

    return (
        <>
        <h1 className=' text-4xl p-4 mx-28 my-5'>Welcome back</h1>
        <div className="flex justify-center w-full h-screen my-20">
            
            <div className="carousel w-full h-full max-w-7xl max-h-[55vh]  rounded-lg shadow-lg relative overflow-hidden">
                {[1, 2, 3, 4].map((slide) => (
                    <div
                        key={slide}
                        className={`carousel-item absolute inset-0 w-full h-full transition-opacity duration-500 ${
                            currentSlide === slide ? 'block opacity-100' : 'hidden opacity-0'
                        }`}
                    >
                        <img
                            src={
                                slide === 1
                                    ? pic1
                                    : slide === 2
                                    ? pic2
                                    : slide === 3
                                    ? pic3
                                    : pic2
                            }
                            alt={`Slide ${slide}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}
                <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
                    <button onClick={goToPrevSlide} className="btn btn-circle">❮</button>
                    <button onClick={goToNextSlide} className="btn btn-circle">❯</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Carousel;
