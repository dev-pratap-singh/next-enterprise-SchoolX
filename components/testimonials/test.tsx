"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  // List of testimonials
  const testimonials = [
    {
      id: 1,
      text: 'Lil Pals has been a wonderful experience for our daughter, Mia. From the moment we stepped into the school, we were impressed by the warm and welcoming environment...',
      name: 'Christine & Phil, parents of Mia',
      image: '/image 2.png',
      rating: '⭐️⭐️⭐️⭐️⭐️',
    },
    {
      id: 2,
      text: 'Lil Pals has been a wonderful experience for our daughter, Ava. From the moment we joined, we were impressed by the warm and nurturing environment...',
      name: 'Lena & Raj, parents of Ava',
      image: '/image 3.png',
      rating: '⭐️⭐️⭐️⭐️⭐️',
    },
    {
      id: 3,
      text: 'Lil Pals has been a wonderful experience for our daughter, Mia. From the moment we stepped into the school, we were impressed by the warm and welcoming environment...',
      name: 'Christine & Phil, parents of Mia',
      image: '/image 4.png',
      rating: '⭐️⭐️⭐️⭐️⭐️',
    },
    {
      id: 4,
      text: 'The school has really helped our son, Liam, grow socially and emotionally. The teachers care deeply about every child...',
      name: 'Sara & Mike, parents of Liam',
      image: '/iii.jpg',
      rating: '⭐️⭐️⭐️⭐️⭐️',
    },
    {
      id: 5,
      text: 'I love how engaging and fun the curriculum is at Lil Pals. Our daughter Ava always comes home with exciting stories to tell!',
      name: 'Jennifer & David, parents of Ava',
      image: '/isto.jpg',
      rating: '⭐️⭐️⭐️⭐️⭐️',
    },
    {
      id: 6,
      text: 'This daycare is perfect for our busy family. They take such great care of our son and provide him with a safe, fun environment...',
      name: 'Emily & Sam, parents of Noah',
      image: '/istoc.jpg',
      rating: '⭐️⭐️⭐️⭐️⭐️',
    },
    // New Testimonials
    {
      id: 7,
      text: 'Lil Pals is a fantastic place for our child to learn and grow. The teachers are caring, and the programs are fun and educational!',
      name: 'Nina & Alex, parents of Zoe',
      image: '/istocko.jpg',
      rating: '⭐️⭐️⭐️⭐️⭐️',
    },
    {
      id: 8,
      text: 'We have been so happy with Lil Pals. Our son, Jack, has learned so much, and we are grateful for the nurturing environment.',
      name: 'Emma & John, parents of Jack',
      image: '/istockphoto.jpg',
      rating: '⭐️⭐️⭐️⭐️⭐️',
    },
    {
      id: 9,
      text: 'The care and attention that Lil Pals provides is outstanding. We couldn’t ask for a better place for our daughter.',
      name: 'Sophia & Mark, parents of Ella',
      image: '/ist.jpg',
      rating: '⭐️⭐️⭐️⭐️⭐️',
    },
  ];

  // State to manage current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the "Next" button click to shift by 3 testimonials
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Handle the "Prev" button click to shift back by 3 testimonials
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Slice the testimonials array to show three at a time, with wrap-around
  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="bg-gradient-to-b from-green-100 to-blue-100 p-10 text-center">
      <h4 className="text-4xl font-bold text-gray-800 mb-8">Our Testimonials</h4>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex) * (100 / 3)}%)` }}
        >
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-[33.33%] bg-gray-100 p-6 rounded-xl shadow-lg border-t-8 border-purple-300 relative mx-2">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={120}
                height={120}
                className="mx-auto rounded-full border-4 border-white -mt-14 shadow-md"
              />
              <p className="mt-6 text-gray-700 font-light">{testimonial.text}</p>
              <p className="mt-4 font-semibold text-gray-600">— {testimonial.name}</p>
              <div className="mt-4 text-yellow-500 text-lg">{testimonial.rating}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows for navigation */}
      <div className="flex justify-center mt-8 space-x-4">
        <button onClick={prevSlide} className="text-2xl text-gray-600 hover:text-gray-800 transition">&#9664;</button>
        <button onClick={nextSlide} className="text-2xl text-gray-600 hover:text-gray-800 transition">&#9654;</button>
      </div>
    </section>
  );
};

export default Testimonials;
