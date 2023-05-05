import s from "./UICard.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Grid, Pagination } from "swiper";
import { slides } from "../../constants/constants";

const UICard = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Autoplay, Grid, Pagination]}
        className="project_slider"
      ></Swiper>
    </>
  );
};

export default UICard;
