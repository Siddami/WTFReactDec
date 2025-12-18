import "./Footer.css";
import Facebook from "../../assets/social-icons/facebook.svg?react";
import Instagram from "../../assets/social-icons/instagram.svg?react";
import Pinterest from "../../assets/social-icons/pinterest.svg?react";
import Twitter from "../../assets/social-icons/twitter.svg?react";
import Logo from "../../assets/social-icons/footer-logo.svg?react"
import gallery from '../../data/gallery.json'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__container">
        {/* Brand */}
        <div className="Footer__brand">
          <div className="Footer__logo">
            <Logo />
          </div>

          <p className="Footer__description">
            Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt
            tortor aliquam nulla facilisi cras fermentum odio eu.
          </p>

          <div className="Footer__socials">
            <a aria-label="Facebook">
              <Facebook />
            </a>
            <a aria-label="Instagram">
              <Instagram />
            </a>
            <a aria-label="Pinterest">
              <Pinterest />
            </a>
            <a aria-label="Twitter">
              <Twitter />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="Footer__links">
          <h4>Our Services</h4>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Management</li>
            <li>Digital Marketing</li>
            <li>Blog News</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="Footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li>Templates</li>
            <li>Blog And Article</li>
            <li>Integrations</li>
            <li>Webinars</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>

        {/* Gallery */}
        <div className="Footer__gallery">
          <h4>Gallery</h4>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
                    <img src={item.gallery} alt={`Gallery Image ${index + 1}`} key={index}/>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="Footer__bottom">
        Copyright © 2024 <span>edunity</span>. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
