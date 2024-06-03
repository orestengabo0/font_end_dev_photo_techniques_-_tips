import { IoMenu } from "react-icons/io5";
import styles from "./../NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid justify-content-center">
        <ul className="nav d-flex justify-content-center nav-underline">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${styles["nav-link"]}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${styles["nav-link"]}`}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className={`nav-link ${styles["nav-link"]}`}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className={`nav-link ${styles["nav-link"]}`}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
