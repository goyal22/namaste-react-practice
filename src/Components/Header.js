import { LOGO_URL } from "./../utils/Constants";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <nav className="nav">
        <ul className="nav-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
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
