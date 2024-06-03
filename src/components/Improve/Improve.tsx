import React from "react";
import styles from './Improve.module.css'

const Improve = () => {
  return (
    <div className="bg-primary mt-5">
      <h2 className="pt-5 text-white text-center fw-bold">
        Ready to improve your photography?
      </h2>
      <p className="text-white text-center fs-5 p-3 ">
        Our comprehensive resources and services can help you take your skills
        to the next level.
      </p>
      <div className="d-flex justify-content-center pb-5">
        <a href="#" className={`btn ${styles.btnCustom}`}>
          Explore Services
        </a>
      </div>
    </div>
  );
};

export default Improve;
