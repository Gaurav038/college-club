import React from "react";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="foot">
    <footer id="footer">
      <div className="leftFooter">
        <h4>External Links</h4>
        <Link to="/"><TiSocialLinkedin /> Join us on linkdin</Link>
        <Link to="/form"><TiGroup /> Registration here</Link>
      </div>

      <div className="rightFooter">
        <h4>Contact Us</h4>
        <a><HiLocationMarker /> NPSEI Gic road SIT Campus, Pithorgarh - 262501</a>
        <a><FaPhoneSquareAlt /> +91 8171280446</a>
        <a><MdEmail /> club22.fun@gmail.com</a>
      
      </div>
      
    </footer>
    <div className="midFooter">   
        <p>&copy; 2022 NPSEI-Pithoragarh</p>
      </div>
    </div>
  );
};

export default Footer;