import React from "react";
import styles from './Card.module.css'

interface Props {
    image: string,
    description: string,
    headerCard: string,
    paragraph: string
}

const Card = ({image, description, headerCard, paragraph}: Props) => {
  return (
    <div style={{width: '40%'}} className={`m-4 ${styles.card}`}>
      <div className={`card`}>
          <img style={{width: '100%', height: 'auto', borderTopLeftRadius:'5px', borderTopRightRadius: '5px'}} src={image} alt={description}/>
          <h4 className="mt-3 text-center text-black">{headerCard}</h4>
          <p className="p-3">{paragraph}</p>
          <a href="#" className="btn btn-primary m-3">Learn More</a>
        </div>
    </div>
  );
};

export default Card;
