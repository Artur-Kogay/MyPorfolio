import React from "react";
import s from "./ProjectsCard.module.scss";
import { motion } from "framer-motion";
import { slides } from "@/constants/constants";
import ProjectsStack from "../ProjectsStack/ProjectsStack";

const ProjectsCard = ({ tag, info, url, stacks }) => {
  return (
    <motion.div
      initial="hidden"
      transition={{ duration: 0.7 }}
      whileInView="visible"
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1 },
      }}
      className={s.card}
    >
      <motion.h1
        initial="hidden"
        transition={{ duration: 0.5 }}
        whileInView="visible"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1 },
        }}
      >
        {tag}
      </motion.h1>
      <motion.p
        initial="hidden"
        transition={{ duration: 0.7 }}
        whileInView="visible"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1 },
        }}
      >
        {info}
      </motion.p>
      <motion.div
        initial="hidden"
        transition={{ duration: 0.8 }}
        whileInView="visible"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1 },
        }}
        className={s.stack}
      >
        {stacks.map((stack, index) => (
          <ProjectsStack stack={stack.name} key={index} />
        ))}
      </motion.div>
      <div className={s.card_btn}>
        <form target="_blank" action={url}>
          <button>Ссылка</button>
        </form>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
