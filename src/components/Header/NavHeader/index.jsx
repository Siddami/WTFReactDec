import { useState } from "react";
import Arrow from "../../../assets/icons/arrow.svg?react";
import Button from "../../Button";
import Logo from "../../../assets/images/logo.svg?react";
import "./NavHeader.css";

const NavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="NavHeader">
      <div className="NavHeader__inner">
        <Logo className="logo" />

        <div
          className="mobile-menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>

        <div className={`nav-content ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <Button
            suffix={<Arrow />}
            variant="primary"
            rounded={true}
            size="lg"
            radius="rounded-md"
          >
            Create Account
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
