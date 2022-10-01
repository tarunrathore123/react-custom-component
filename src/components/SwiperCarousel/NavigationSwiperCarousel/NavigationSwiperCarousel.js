import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper";
import "./style.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function NavigationSwiperCarousel() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      Navigation with pagination carousel
      <Swiper
        navigation
        pagination
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        // pagination={pagination}
        // pagination={{ type: "progressbar" }}   // for progress bar
        // pagination={{ type: "fraction" }} // for number pagination
        scrollbar={{
          hide: true,
        }}
        modules={[Navigation, Pagination, Scrollbar]}
        className="mySwiper"
        style={{ height: "400px" }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      Centered carousel
      <Swiper
        navigation
        pagination
        slidesPerView={3}
        spaceBetween={30}
        // pagination={pagination}
        // pagination={{ type: "progressbar" }}   // for progress bar
        // pagination={{ type: "fraction" }} // for number pagination
        scrollbar={{
          hide: true,
        }}
        modules={[Navigation, Pagination, Scrollbar]}
        className="mySwiper"
        style={{ height: "400px" }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
