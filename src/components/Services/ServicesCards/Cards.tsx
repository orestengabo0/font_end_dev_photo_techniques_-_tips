import React from "react";
import styles from "./Cards.module.css";

interface Props {
    photographicHeading: string,
    photographicParagraphy: string,
    buttonText: string,
    cardIcon: React.ReactNode
}

const Cards = ({photographicHeading, photographicParagraphy, buttonText, cardIcon}:Props) => {
  return (
    <div style={{ width: "30%" }} className={`mt-5 ms-4`}>
      <div className={`card ${styles.card}`}>
        <div className="d-flex justify-content-center mt-5">
        {cardIcon}
        </div>
        <h4 className="mt-3 text-center text-black">{photographicHeading}</h4>
        <p className="p-3 text-center text-secondary">{photographicParagraphy}</p>
        <div className="d-flex justify-content-center mb-3">
          <a href="#" className={`btn btn-primary m-3 ps-3 pe-3 pt-2 pb-2`}>{buttonText}</a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
