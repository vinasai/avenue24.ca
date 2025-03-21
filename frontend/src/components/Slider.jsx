import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import bg3 from '../assets/03.jpg';
import bg2 from '../assets/1.png';
import bg1 from '../assets/a5.jpg';


const sliderData = [
  {
    image: bg2,
    title: 'Need a Space for Your Next Big Idea?',
    subtitle: 'Rent Our Cozy Venue for Events, Classes, and More!',
  },
  {
    image: bg1,
    title: 'Looking for a Creative Workshop?',
    subtitle: 'Book Our Space for Your Art and Craft Classes!',
  },
  {
    image: bg3,
    title: 'Host Memorable Events!',
    subtitle: 'Perfect Venue for Parties, Meetings, and Celebrations!',
  },
];

const SliderSection = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      className="w-full h-[120vh]"
    >
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index}>
          <section
            className="bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${slide.image})`, height: '100vh' }}
          >
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
              <br />
              <h2 className="text-4xl md:text-4xl font-bold">{slide.subtitle}</h2>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderSection;
