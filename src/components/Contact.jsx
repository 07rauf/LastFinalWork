import React from 'react';
import '../TotalCss/total.css';
import image3 from '../img/img3.png'
import image1 from '../img/img1.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";    
import { SlSocialVkontakte } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
const ContactUs = () => {
  return (
    <div>
      <div className="footer">
        <div className="about1">
            <img  className='foot-img1'src={image3}></img>
            <img  className='foot-img1'src={image1}></img>
          <div className="call">
            <div className='us'>
            <p><u>Contact Us</u></p>
            </div>
            <div className="telephone">
              <p className="footer-paragraph"><BsFillTelephoneFill /> +994 099-999-99-99</p>
            </div>
            <div className="email">
              <p className="footer-paragraph"><IoMail />toyshopbynezerov@gmail.com    </p>
            </div>
            <div className='us3'>
              <p className='us2'><FaCcVisa /></p>
              <p className='us2'><FaCcMastercard /></p>
              </div>
          </div>
        </div>
        <div className="social-account">
          <a href="instragram"><i><FaInstagram /></i></a>
          <a href="facebook"><i><FaFacebook /></i></a>
          <a href="vk"><i><SlSocialVkontakte /></i></a>
          <a href="whatsapp"><i><IoLogoWhatsapp /></i></a>
        </div>
        <div className="sign">
          <p className="foot-paragraph">© ToyShop by Nəzərov, 2024</p>
        </div>
      </div>ş
    </div>
  );
};

export default ContactUs;
