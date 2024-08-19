// import React from 'react';
import './Footer.css';
import { FaSnapchatGhost, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>من نحن؟</h3>
          <p>المصورات السعوديات مدى ومعياد الشمري متخصصات في مجال تصوير الأعراس.</p>
          <p>الرياض - المملكة العربية السعودية</p>
          <p>Email: Alshammari.Brides@gmail.com</p>
        </div>

        <div className="footer-section videos">
          <h3>فيديوهات تهمك</h3>
          <ul>
            <li>طريقة تصوير فيديو للزفة الأولى للعروسان</li>
            <li>فيديو تصوير جزء من الفرست لوك لعروستنا</li>
            <li>فيديو تصوير جزء من تجهيزات العروس في يوم زواجها</li>
          </ul>
        </div>

        <div className="footer-section follow-us">
          <h3>تابعوا حساباتي</h3>
          <div className="social-icons">
            <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
              <FaSnapchatGhost className="icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2020 © Mada Alshammari - CREATED BY Muharraqi Design</p>
      </div>
    </footer>
  );
};

export default Footer;
