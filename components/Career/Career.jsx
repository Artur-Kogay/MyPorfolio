import React, { useRef } from "react";
import s from "./Career.module.scss";
import CareerCard from "../CareerCard/CareerCard";
import { motion, useAnimationFrame } from "framer-motion";
import { career } from "@/constants/constants";
const Career = () => {

  const ref = useRef(null);

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -10;
    ref.current.style.transform = `translateY(${y}px) `;
  });

  return (
    <>
      <div id="carreira" className={s.container}>
        <div className={s.content}>
          <div className={s.first_block}>
            <motion.button
            ref={ref}
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >💼 Carreira</motion.button>
            <motion.h1
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >Trajetória até aqui</motion.h1>
          </div>
          <div className={s.third_block}>
            <CareerCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
