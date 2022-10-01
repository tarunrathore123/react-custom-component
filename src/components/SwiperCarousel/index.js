import React from "react";
import DefaultSwiperCarousel from "./DefaultSwiperCarousel/DefaultSwiperCarousel";
import NavigationSwiperCarousel from "./NavigationSwiperCarousel/NavigationSwiperCarousel";
import "./style.scss";

export default function Index() {
  return (
    <div className="swiper-carousel">
      <DefaultSwiperCarousel />
      <NavigationSwiperCarousel />
    </div>
  );
}
