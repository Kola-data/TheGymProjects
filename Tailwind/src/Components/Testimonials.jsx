import React, { useRef } from 'react';
import Tester1 from "../assets/testimonialsImg/tester1.svg";
import Tester2 from "../assets/testimonialsImg/tester2.svg";
import Tester3 from "../assets/testimonialsImg/tester3.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Star from "../assets/star.svg";

function Testimonials() {
  const testimonials = [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      image: Tester1,
      message: `“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.`
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      image: Tester2,
      message: `“I like it because I like to travel far and still can connect with high speed”.`
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      image: Tester3,
      message: `“This is very unusual for my business that currently requires a virtual private network that has high security”.`
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      image: Tester3,
      message: `“This is very unusual for my business that currently requires a virtual private network that has high security”.`
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 420, behavior: "smooth" });
  };

  return (
    <section className='flex flex-col items-center justify-center h-auto bg-gray-50 sm:px-30 px-5'>
      <div className='flex flex-col justify-between items-center text-center'>
        <h1 className='text-4xl font-bold mt-10 w-[450px]'>Trusted by Thousands of Happy Customer</h1>
        <p className='text-sm text-gray-500 mt-8 mb-18 sm:w-[450px] w-[300px]'>
          These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
        </p>
      </div>

      {/* Scrollable Testimonials */}
      <div
        ref={scrollRef}
        className="flex gap-5 pb-10 mt-10 lg:w-[80%] w-[100%] overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border-2 border-gray-400 rounded-2xl p-7 w-[400px] h-[230px] flex-shrink-0 "
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <img src={testimonial.image} alt={testimonial.name} className="w-[40px] h-[40px] rounded-full" />
                <div>
                  <h2 className="font-bold text-[18px]">{testimonial.name}</h2>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <p className="text-sm">{testimonial.rating}</p>
                <img src={Star} alt="star" className="w-[16px] h-[16px]" />
              </div>
            </div>
            <p className="leading-[30px] pb-5 pt-3 text-gray-800 text-[15px]">
              {testimonial.message}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4 mb-20">
        <button
          onClick={scrollLeft}
          className="w-10 h-10 rounded-full border-2 border-red-500 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={scrollRight}
          className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
