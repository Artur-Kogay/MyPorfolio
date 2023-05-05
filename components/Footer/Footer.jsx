import React, { useRef } from "react";
import s from "./Footer.module.scss";
import Footer_end from "../Footer_end/Footer_end";
import { motion, useAnimationFrame } from "framer-motion";
import arrowUp from '../../public/ArrowUp.png'
import Image from "next/image";

const Footer = () => {
  const ref = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -10;
    ref.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 850)) * -10;
    ref6.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 900)) * -10;
    ref7.current.style.transform = `translateY(${y}px) `;
  });

  return (
    <>
      <div id="contact" className={s.global}>
        <div className={s.container}>
          <div className={s.content}>
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
              📬 Контакты
            </motion.button>
            <motion.h1
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              Thank you!{" "}
            </motion.h1>

            <div className={s.footer_whats}>
              <form target="_blank" action="https://wa.me/996704031900">
                <motion.button
                  ref={ref6}
                  initial="hidden"
                  transition={{ duration: 0.7 }}
                  whileInView="visible"
                  variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1 },
                  }}
                  className={s.btn_whatsapp}
                >
                  <img src="/Whatsapp.png" alt="whatsapp" /> Связаться со мной{" "}
                </motion.button>
              </form>

              <motion.div
                ref={ref7}
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
                className={s.email}
              >
                <img src="/tg.png" alt="tg" />
                <h2>E-mail:</h2>
                <a href="#">9571artur9571@gmail.com</a>
              </motion.div>
            </div>
            <motion.a
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              className={s.footer_l}
              href="#"
            >
              Вернуться в начало <Image src='/ArrowUp.png' width={30} height={30} alt="arrowUp" />
            </motion.a>
          </div>
        </div>

        <div className={s.footer_end}>
          <Footer_end />
        </div>
      </div>
    </>
  );
};

export default Footer;
