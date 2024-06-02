import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid justify-content-center">
        <ul className="nav d-flex justify-content-center nav-underline">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
