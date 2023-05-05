import React from "react";
import s from "./Footer_end.module.scss";
const Footer_end = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <h1> SNOWFLAKE · 2023</h1>
        <div className={s.icon}>
          <a href="#">
            <img src="/linkedin.svg" alt="in" />
          </a>
          <a href="#">
            <img src="/githubHeader.png" alt="github" />
          </a>

          <a href="#">
            <img src="/behance.svg" alt="behance" />
          </a>
        </div>
        <h2>Copyright © Henrique Sousa</h2>
      </div>
    </div>
  );
};

export default Footer_end;
