import React, { useRef } from "react";
import s from "./Testimony.module.scss";
import TestimonyCard from "../TestimonyCard/TestimonyCard";
import { motion, useAnimationFrame } from "framer-motion";

const Testimony = () => {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -10;
    ref.current.style.transform = `translateY(${y}px) `;
  });

  return (
    <>
      <div id="rek" className={s.container}>
        <motion.button
          ref={ref}
          initial="hidden"
          transition={{ duration: 0.7 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          💬 Recomendações
        </motion.button>
        <div className={s.content}>
          <motion.h1
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            Отзывы
          </motion.h1>
        </div>{" "}
        <div className={s.testimonyCard}>
          <TestimonyCard />
        </div>
      </div>
    </>
  );
};

export default Testimony;
