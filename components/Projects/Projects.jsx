import React, { useRef } from "react";
import s from "./Projects.module.scss";
import UICard from "../UICard/UICard";
import { motion, useAnimationFrame } from "framer-motion";
import { slides } from "../../constants/constants";
import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Projects = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -10;
    ref.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 800)) * -7;
    ref2.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 850)) * -7;
    ref3.current.style.transform = `translateY(${y}px) `;
  });

  useAnimationFrame((t) => {
    const y = (1 + Math.sin(t / 900)) * -7;
    ref4.current.style.transform = `translateY(${y}px) `;
  });

  const slidesStacks = slides.map(item => {
    return item.stacks
  })

  return (
    <>
      <div id="partfolio" className={s.container}>
        <div className={s.projects}>
          <div className={s.tag}>
            <form target="_blank" action="https://wa.me/996704031900">
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
                🔗 Связь
              </motion.button>
            </form>
            <motion.h1
              initial="hidden"
              transition={{ duration: 0.7 }}
              whileInView="visible"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
            >
              Проекты
            </motion.h1>
            <div className={s.tab}>
              <motion.button
                ref={ref2}
                initial="hidden"
                transition={{ duration: 0.5 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
                className={s.tab_btn}
              >
                <img src="/ui.png" alt="ui" /> UI Design
              </motion.button>
              <motion.button
                ref={ref3}
                initial="hidden"
                transition={{ duration: 0.6 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
                className={s.tab_btn}
              >
                <img src="/pal.svg" alt="pal" /> Design
              </motion.button>
              <motion.button
                ref={ref4}
                initial="hidden"
                transition={{ duration: 0.7 }}
                whileInView="visible"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
                className={s.tab_btn}
              >
                <img src="/ui.png" alt="ui" /> UI Design
              </motion.button>
            </div>
          </div>
          <motion.div className={s.cards}>
            {slides.map((item, index) => (
              <ProjectsCard
                tag={item.tag}
                info={item.info}
                key={index}
                url={item.url}
                stacks={item.stacks}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
