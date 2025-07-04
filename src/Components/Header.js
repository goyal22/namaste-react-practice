import { LOGO_URL } from "./../utils/Constants";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={LOGO_URL} /><h1> Foodie's Paradise</h1>
      </div>
      <nav className="nav">
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
          
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
