import React, { useRef } from "react";
import s from "./TestimonyCard.module.scss";
import { testimony } from "@/constants/Testimony";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper";
import { motion } from "framer-motion";
import Testimony from "../Testimony/Testimony";

const TestimonyCard = () => {
  return (
    <>
      <div className={s.container}>
        <Swiper
          autoplay={{ delay: 2000 }}
          // slidesPerView={3}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          breakpoints={{
            0: {
              centeredSlides: "true",
            },
            425: {
              slidesPerView: "3",
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {testimony.map((item) => (
            <SwiperSlide className={s.slider}>
              {" "}
              <motion.div
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
                className={s.content}
              >
                <div className={s.start}>
                  <img src={item.name} alt="name" />
                  <p>{item.description}</p>
                </div>
                <div className={s.end}>
                  <img src={item.avatar} alt="avatar" />
                  <div className={s.title}>
                    <h1>{item.user}</h1>
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </motion.div>{" "}
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.7 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={s.navigate}
        >
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </motion.div>
      </div>
    </>
  );
};

export default TestimonyCard;
