import React from "react";
import styles from './ContactsForm.module.css'

const ContactsForm = () => {
  return (
    <form className={`card ${styles.card} p-5 mt-5`}>
      <h4 className="fw-bold">Send Us A mesage</h4>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" id="name" placeholder="Write your name here..." className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text" id="email" placeholder="Write your email here..." className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" placeholder="Write your message here..." id="message"></textarea>
      </div>
      <div className="mb-3 d-flex justify-content-center">
        <button className={`btn btn-primary ${styles['btn']} `}>Submit</button>
      </div>
    </form>
  );
};

export default ContactsForm;
