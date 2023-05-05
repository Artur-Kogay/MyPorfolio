import React, { useRef } from "react";
import s from "./Stack.module.scss";
import { motion, useAnimationFrame } from "framer-motion";
import { tech, outtech } from "../../constants/constants";

const Stack = () => {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -10;
    ref.current.style.transform = `translateY(${y}px) `;
  });

  return (
    <>
      <div id="skill" className={s.container}>
        <div className={s.stack}>
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
            🧑‍💻 Навыки
          </motion.button>
          <motion.h1
            initial="hidden"
            transition={{ duration: 0.5 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            Технологии
          </motion.h1>
          <div className={s.tech}>
            {tech.map((tech) => (
              <motion.img
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
                src={tech.img}
                alt="tech"
              />
            ))}
          </div>
          <div className={s.tech}>
            {outtech.map((tech) => (
              <motion.img
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
                src={tech.img}
                alt="tech"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stack;
