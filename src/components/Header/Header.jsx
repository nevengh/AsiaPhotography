import { useState } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [active, setActive] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSetActive = (section) => {
    setActive(section);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false); // Close menu on item click in mobile view
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header">
      <div className="navbar ">
        <div className={`nav_item ${active === "home" ? "active" : ""}`}>
          <a href="#home" onClick={() => handleSetActive("home")}>
            الصفحة الرئيسية
          </a>
        </div>
        <div className={`nav_item ${active === "six_hour" ? "active" : ""}`}>
          <a href="#six_hour" onClick={() => handleSetActive("six_hour")}>
            باقة 6 ساعات
          </a>
        </div>
        <div className={`nav_item ${active === "ten_hour" ? "active" : ""}`}>
          <a href="#ten_hour" onClick={() => handleSetActive("ten_hour")}>
            باقة 10 ساعات
          </a>
        </div>
        <div className="nav_logo">آسيا البركاتي</div>
        <div className={`nav_item ${active === "additions" ? "active" : ""}`}>
          <a href="#additions" onClick={() => handleSetActive("additions")}>
            الإضافات
          </a>
        </div>
        <div className={`nav_item ${active === "videos" ? "active" : ""}`}>
          <a href="#videos" onClick={() => handleSetActive("videos")}>
            فيديوهات قد تهمك
          </a>
        </div>
        <div className={`nav_item ${active === "contact" ? "active" : ""}`}>
          <a href="#contact" onClick={() => handleSetActive("contact")}>
            للحجز والتواصل
          </a>
        </div>
        
        <div className={`nav_items ${isMobileMenuOpen ? "open" : ""}`}>
          <div className={`nav_item_mobile ${active === "home" ? "active" : ""}`}>
            <a href="#home" onClick={() => handleSetActive("home")}>
              الصفحة الرئيسية
            </a>
          </div>
          <div className={`nav_item_mobile ${active === "six_hour" ? "active" : ""}`}>
            <a href="#six_hour" onClick={() => handleSetActive("six_hour")}>
              باقة 6 ساعات
            </a>
          </div>
          <div className={`nav_item_mobile ${active === "ten_hour" ? "active" : ""}`}>
            <a href="#ten_hour" onClick={() => handleSetActive("ten_hour")}>
              باقة 10 ساعات
            </a>
          </div>
          
          <div className={`nav_item_mobile ${active === "additions" ? "active" : ""}`}>
            <a href="#additions" onClick={() => handleSetActive("additions")}>
              الإضافات
            </a>
          </div>
          <div className={`nav_item_mobile ${active === "videos" ? "active" : ""}`}>
            <a href="#videos" onClick={() => handleSetActive("videos")}>
              فيديوهات قد تهمك
            </a>
          </div>
          <div className={`nav_item_mobile ${active === "contact" ? "active" : ""}`}>
            <a href="#contact" onClick={() => handleSetActive("contact")}>
              للحجز والتواصل
            </a>
          </div>
        </div>
      <div className="burger_menu" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      </div>
    </div>
  );
}

export default Header;
