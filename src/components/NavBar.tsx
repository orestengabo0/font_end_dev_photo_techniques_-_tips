import { IoMenu } from "react-icons/io5";
import styles from './../NavBar.module.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid justify-content-center">
        <ul className="nav d-flex justify-content-center nav-underline">
          <li className="nav-item">
            <a href="#" className={`nav-link ${styles['nav-link']}`}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link ${styles['nav-link']}`}>About Us</a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link ${styles['nav-link']}`}>Services</a>
          </li>
          <li className="nav-item">
            <a href="#" className={`nav-link ${styles['nav-link']}`}>Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
