import React, { useRef } from "react";
import s from "./Info.module.scss";
import { motion, useAnimationFrame } from "framer-motion";

const Info = () => {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -10;
    ref.current.style.transform = `translateY(${y}px) `;
  });

  return (
    <>
      <div id="sobre" className={s.container}>
        <div className={s.info}>
          <div className={s.first}>
            <motion.div
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              className={s.back}
            >
              <img src="/iam.jpg" alt="man" />
            </motion.div>
          </div>
          <div className={s.second}>
            <motion.button
              ref={ref}
              initial="hidden"
              transition={{ duration: 0.5 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              🧐 Кто я?
            </motion.button>
            <motion.h1
              initial="hidden"
              transition={{ duration: 0.6 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              Биография
            </motion.h1>
            <div className={s.texts}>
              <motion.h6
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
              >
                {" "}
                👋 Родился и вырос в городе Бишкек, 19 лет
              </motion.h6>
              <br />
              <motion.h6
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
              >
                {" "}
                👨‍💻 Пишу в основном на Next JS, Redux Toolkit, Typescript
              </motion.h6>
              <br />
              <motion.h6
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
              >
                {" "}
                🎓 Получил среднее-законченное образование, закончил курсы программировани Clear Code School и IT Academy
              </motion.h6>
              <br />
              <motion.h6
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
              >
                {" "}
                💡 Выпустил 3 группы по направлению Front0end.
              </motion.h6>
              <br />
              <motion.h6
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
              >
                {" "}
                🚀 Писал на Node JS, настраивал Docker File.
              </motion.h6>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
