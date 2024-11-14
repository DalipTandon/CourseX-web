import { useState } from 'react';

import pic1 from "../../img/demo2.jpg"
import pic2 from "../../img/demo1.png"
import pic3 from "../../img/demo3.jpg"
import { useSelector } from 'react-redux';
import Feed from './Feed';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Faqs from './Faqs';
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 4;
    const signedInUser=useSelector(store=>store.user);
    // Function to go to the next slide    
    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
    };

    // Function to go to the previous slide
    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 1 ? totalSlides : prevSlide - 1));
    };

    return (
        <div className=' p-2'>
       { signedInUser && <p className=' text-4xl mx-28 mt-10 font-bold'>Welcome back ,{signedInUser.firstName}
        <br/>
       <p className='my-4 font-serif'>Ready to dive deep into The world of Courses?</p> 
       </p> 
       }
        <div className="flex justify-center w-full h-[30vw] mt-12 ">
            
            <div className="carousel w-full h-full max-w-7xl max-h-[55vh]  rounded-lg shadow-lg relative overflow-hidden ">
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
       <h2 className='text-3xl font-bold font-serif mx-28 '>
       All the skills you need in one place </h2>
       <p className='mx-28 text-xl font-semibold font-serif text-gray-500'>From critical skills to technical topics, CourseX supports your professional development.</p>

       <p className='mx-28 text-2xl font-semibold font-serif my-14'>Explore All Our Courses</p>
       <div className='items-center mx-28'><Feed/></div>
       <p  className='mx-28 text-xl font-bold font-serif text-gray-500 mt-24'>Accelerate growth — for you or your organization
        <br></br>
       Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.</p>
       <div className='flex gap-4 mx-28 my-12' ><Pricing/></div>

       <h4 className='text-4xl font-bold font-serif mx-28 '>See what others are achieving through learning</h4>
       <div className='flex gap-4 mx-28 my-12'><Testimonials/></div>
       <p className='mx-28 text-3xl font-semibold font-serif text-black'>FAQS</p>
         <Faqs/>
        </div>
        
    );
};

export default Carousel;
