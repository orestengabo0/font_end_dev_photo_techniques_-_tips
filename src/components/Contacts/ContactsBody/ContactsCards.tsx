import React from "react";
import { SlLocationPin } from "react-icons/sl";
import styles from "./ContactsCard.module.css";

interface Props {
  contactType: string,
  contacts: string,
  contactIcon: React.ReactNode
}

const ContactsCards = ({contactType, contacts, contactIcon}: Props) => {
  return (
    <div className="mt-5 ms-2">
      <div className={`card p-5 ${styles.card}`}>
        <div className="d-flex justify-content-center p-5">
          {contactIcon}
        </div>
        <h4 className="text-center">{contactType}</h4>
        <p className="text-center">{contacts}</p>
      </div>
    </div>
  );
};

export default ContactsCards;
