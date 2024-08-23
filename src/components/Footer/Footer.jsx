// import React from 'react';
import './Footer.css';
import { FaSnapchatGhost, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>من نحن؟</h3>
          <p>شركة متخصصة في تصوير الزواجات والمناسبات بخبرة أكثر من 10 سنوات نحن لا
        نلتقط لقطات مجرّدة بل نصنع من كُل لحظة جميلة لقطة مليئة بالمشاعر لتعيش
        معكم للأبد </p>
          <p>Dubai,United Arab Emirates</p>
          <p>Email: example@gmail.com</p>
        </div>

        <div className="footer-section videos">
          <h3>الألبومات</h3>
          <ul>
            <li><a href="#Album">صور تفاصيل اطلالة العروسين</a></li>
            <li><a href="#Album">صور من حفل الزفاف</a></li>
            <li><a href="#Album">صور العريس و العروس </a></li>
          </ul>
        </div>

        <div className="footer-section follow-us">
          <h3>تابعوا حساباتي</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaSnapchatGhost className="icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024 © Asia Albarakati</p>
      </div>
    </footer>
  );
};

export default Footer;
