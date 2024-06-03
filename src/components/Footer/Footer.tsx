import React from "react";
import styles from './Footer.module.css'
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
 
interface Props {
  size?: number,
  margin?: string
}

const Footer = ({size = 25, margin = 'm-5'}: Props) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <a href="#" className={styles.iconContainer}><FaFacebookF color="#176ddd" size={size} className={margin} /></a>
        <a href="#" className={styles.iconContainer}><FaTwitter color="#4f9ecc"  size={size} className={margin}/></a>
        <a href="#" className={styles.iconContainer}><FaLinkedin color="#0442ee" size={size} className={margin} /></a>
        <a href="#" className={styles.iconContainer}><FaInstagram color="#946262" size={size} className={margin} /></a>
        <a href="#" className={styles.iconContainer}><FaYoutube color="#b81a1a" size={size} className={margin} /></a>
      </div>
      <p className="text-center text-grey fs-5">&copy; 2023 Photographic Techniques and Tips. All rights reserved.</p>
    </div>
  );
};

export default Footer;
