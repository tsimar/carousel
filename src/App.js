import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./App.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

function App() {
  const slides = [
    {
      key: 1,
      content: <img src="https://picsum.photos/800/800/?random" alt="1" />,
    },
    {
      key: 2,
      content: <img src="https://picsum.photos/800/800/?random" alt="2" />,
    },
    {
      key: 3,
      content: <img src="https://picsum.photos/600/800/?random" alt="3" />,
    },
    {
      key: 4,
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
    },
    {
      key: 5,
      content: <img src="https://picsum.photos/800/800/?random" alt="5" />,
    },
    {
      key: 6,
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />,
    },
    {
      key: 7,
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />,
    },
    {
      key: 8,
      content: <img src="https://picsum.photos/800/800/?random" alt="8" />,
    },
  ];
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slides.map((item, index) => {
          return <SwiperSlide key={index}>{item.content}</SwiperSlide>;
        })}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline">2</ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline">1</ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
