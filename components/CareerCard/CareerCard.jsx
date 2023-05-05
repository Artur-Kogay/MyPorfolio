import React from "react";
import s from "./CareerCard.module.scss";
import { career, career2 } from "../../constants/constants";
import { motion } from "framer-motion";

const CareerCard = () => {
  return (
    <div className={s.global}>
      <div className={s.first_cards}>
        <motion.h6
          initial="hidden"
          transition={{ duration: 0.7 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          Área profissional <b>2016 · Atualmente</b>
        </motion.h6>
        {career.map((item) => (
          <motion.div
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.third_content}
          >
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <div className={s.dates}>
              <h2>{item.prazo}</h2>
              <h3>{item.data}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      <div className={s.second_cards}>
        <motion.h6
          initial="hidden"
          transition={{ duration: 0.7 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          Acadêmica<b>2014 · Atualmente</b>
        </motion.h6>
        {career2.map((item) => (
          <motion.div
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
            className={s.third_content}
          >
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <div className={s.dates}>
              <h2>{item.prazo}</h2>
              <h3>{item.data}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerCard;
