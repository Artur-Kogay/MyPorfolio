import React from "react";
import s from "./ProjectsStack.module.scss";
import { motion } from "framer-motion";

const ProjectsStack = ({ stack }) => {
  return <span className={s.stack}>{stack}</span>;
};

export default ProjectsStack;
