'use client';
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import CSS modules
import styles from './index.module.css';

// Import custom arrow component
import { CarouselArrow } from '../carouselArrow';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { HeroCard, HeroCardProps } from '../HeroCard';

interface MySwiperProps {
  list: HeroCardProps[];
  pagination?: boolean;
}
export function MySwiper({ list, pagination = true }: MySwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Swiper
      spaceBetween={40}
      centeredSlides={true}
      // autoplay={{
      //   delay: 3000,
      // }}
      pagination={
        pagination
          ? {
              el: '.swiper-pagination',
              clickable: true,
            }
          : undefined
      }
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      loop={true}
      allowTouchMove={true}
      modules={[Autoplay, Pagination, Navigation]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      className={styles.swiper}
      watchSlidesProgress={true}
    >
      {list.map((item, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide}>
          <HeroCard {...item} />
        </SwiperSlide>
      ))}
      <div className={`swiper-pagination`}></div>
      <div className="lg:block hidden">
        <div className="swiper-button-prev">
          <CarouselArrow
            className=" cursor-pointer"
            direction="prev"
            aria-label="Previous slide"
          />
        </div>
        <div className="swiper-button-next">
          <CarouselArrow
            className=" cursor-pointer"
            direction="next"
            aria-label="Next slide"
          />
        </div>
      </div>
    </Swiper>
  );
}
export default MySwiper;
