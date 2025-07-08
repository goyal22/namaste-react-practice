import { LOGO_URL } from "./../utils/Constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header bg-white shadow-md py-3 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="logo flex items-center gap-4">
        <img
          src={LOGO_URL}
          alt="Logo"
          className="h-12 w-12 rounded-full border-2 border-blue-200 shadow-sm"
        />
        <h1 className="text-2xl font-bold text-blue-700 tracking-tight">
          Foodie's Paradise
        </h1>
      </div>
      <nav className="nav">
        <ul className="nav-menu flex gap-6 text-base font-medium list-none p-0 m-0">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors"
            >
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
