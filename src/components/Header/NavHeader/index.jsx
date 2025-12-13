import Arrow from "../../../assets/icons/arrow.svg?react";
import Button from '../../Button'
import Logo from "../../../assets/images/logo.svg?react";
import "./NavHeader.css";

const NavHeader = () => {
  return (
    <nav className="NavHeader">
      <div className="NavHeader__inner">
        <Logo className="logo" />

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
    </nav>
  );
}

export default NavHeader;