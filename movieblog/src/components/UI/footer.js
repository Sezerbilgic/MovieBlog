import React from "react";
import footer from "../assets/images/footer.jpg";
import arrow from "../assets/images/arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer" style={{ backgroundImage: `url(${footer})` }}>
      <div className="overlay">
        <div className="footer-container">
          <div className="footer-links">
            <span>Hakkında</span>
            <span>İletişim</span>
          </div>
          <div className="footer-links">
            <span>Filmler</span>
            <span>Diziler</span>
          </div>
          <div className="footer-links">
            <span>Popüler Oyuncular</span>
            <span>Yakında</span>
          </div>
        </div>
        <div className="rotate-button" onClick={scrollTop}>
          <FontAwesomeIcon
            icon={faChevronUp}
            size="2x"
            style={{ color: "white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
