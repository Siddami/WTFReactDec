import "./InfoHeader.css";
import Phone from "../../../assets/icons/phone.svg?react";
import Envelope from "../../../assets/icons/envelope.svg?react";
import Location from "../../../assets/icons/location.svg?react";
import Facebook from "../../../assets/icons/facebook.svg?react";
import Insta from "../../../assets/icons/insta.svg?react";
import Linkedin from "../../../assets/icons/linkedin.svg?react";
import Youtube from "../../../assets/icons/youtube.svg?react";

const InfoHeader = () => {
  return (
    <section className="InfoHeader">
      <div className="info-container">
        <div className="info">
          <p>
            <span>
              <Phone />
            </span>
            <a href="tel:+008757845682">(00) 875 784 5682</a>
          </p>
          <p>
            <span>
              <Envelope />
            </span>
            <a href="mailto:pacargoinfo@gmail.com">pacargoinfo@gmail.com</a>
          </p>
          <p>
            <span>
              <Location />
            </span>
            <span>238, Arimantab, Moska - USA.</span>
          </p>
        </div>
        <div className="social-info">
          <a href="https://wwww.facebook.com" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="https://wwww.instagram.com" aria-label="Instagram">
            <Insta />
          </a>
          <a href="https://www.linkedin.com" aria-label="Linkedin">
            <Linkedin />
          </a>
          <a href="https://www.youtube.com" aria-label="Youtube">
            <Youtube />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoHeader;
