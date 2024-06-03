import React from "react";
import ContactsHeading from "./Heading/ContactsHeading";
import ContactsCards from "./ContactsBody/ContactsCards";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import ContactsForm from "./ContactsForm/ContactsForm";

const Contacts = () => {
  return (
    <div>
      <ContactsHeading />
      <div className="row">
        <div className="col-md-2">
          <ContactsCards
            contactIcon={<SlLocationPin color="#007bff" size={30} />}
            contactType="Our Address"
            contacts="Mukamira, Nyabihu Gisenyi-Nyabugogo road"
          />
        </div>
        <div className="col-md-2">
          <ContactsCards
            contactIcon={<FiPhone color="#007bff" size={30} />}
            contactType="Phone"
            contacts="(+250) 788-354-140"
          />
        </div>
        <div className="col-md-3">
          <ContactsCards
            contactIcon={<MdOutlineEmail color="#007bff" size={30} />}
            contactType="Email"
            contacts="orestengabo0@gmail.com"
          />
        </div>
        <div className="col-md-5">
          <ContactsForm />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
