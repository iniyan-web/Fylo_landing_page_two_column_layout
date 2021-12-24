import React from "react";
import footerLogo from "../images/footerLogo.svg";
import phoneIcon from "../images/icon-phone.svg";
import mailIcon from "../images/icon-email.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <img className="footer__logo" src={footerLogo} alt="Home." />
        <div className="footer__text">
          <div className="contact">
            <div className="phone">
              <img className="phone__icon" src={phoneIcon} alt="Phone." />
              <p className="phone__info">Phone: +1-543-123-4567</p>
            </div>
            <div className="mail">
              <img className="mail__icon" src={mailIcon} alt="Mail." />
              <p className="mail__info">example@fylo.com</p>
            </div>
          </div>
          <ul className="footer-links1">
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul className="footer-links2">
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <div className="social-icons">
            <i className="icon icon--fb"></i>
            <i className="icon icon--twitter"></i>
            <i className="icon icon--instagram"></i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
