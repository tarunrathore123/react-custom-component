import React from "react";
import { CarouselImage } from "./assets";
import { useState } from "react";
import { CarouselContainer, CarouselItem } from "./CarouselContainer";
import "./style.scss";

export default function Index() {
  const [slide, setSlide] = useState(0);
  return (
    <div className="carousel-wrapper">
      <CarouselContainer setSlide={setSlide}>
        <CarouselItem>
          <div className="container">
            <div className="imageContainer">
              <img src={CarouselImage} alt="" />
            </div>
            <div className="leftContent">
              <div className="content">
                <h1>
                  Stopping smoking can positively impact your physical and
                  mental health.
                </h1>
                <p>
                  Nicorette with Mental Health UK are helping communities to
                  make quitting less of a stressful journey.
                </p>
                <button>visit wellness hub</button>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="container">
            <div className="imageContainer">
              <img src={CarouselImage} alt="" />
            </div>
            <div className="leftContent">
              <div className="content">
                <h1>
                  Stopping smoking can positively impact your physical and
                  mental health.
                </h1>
                <p>
                  Nicorette with Mental Health UK are helping communities to
                  make quitting less of a stressful journey.
                </p>
                <button>visit wellness hub</button>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="container">
            <div className="imageContainer">
              <img src={CarouselImage} alt="" />
            </div>
            <div className="leftContent">
              <div className="content">
                <h1>
                  Stopping smoking can positively impact your physical and
                  mental health.
                </h1>
                <p>
                  Nicorette with Mental Health UK are helping communities to
                  make quitting less of a stressful journey.
                </p>
                <button>visit wellness hub</button>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="container">
            <div className="imageContainer">
              <img src={CarouselImage} alt="" />
            </div>
            <div className="leftContent">
              <div className="content">
                <h1>
                  Stopping smoking can positively impact your physical and
                  mental health.
                </h1>
                <p>
                  Nicorette with Mental Health UK are helping communities to
                  make quitting less of a stressful journey.
                </p>
                <button>visit wellness hub</button>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContainer>
      <div className="activeSlide">
        <li className={`${slide === 0 ? "active" : ""}`}></li>
        <li className={`${slide === 1 ? "active" : ""}`}></li>
        <li className={`${slide === 2 ? "active" : ""}`}></li>
        <li className={`${slide === 3 ? "active" : ""}`}></li>
      </div>
    </div>
  );
}
