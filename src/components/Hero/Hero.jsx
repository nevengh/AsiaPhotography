// import { FaLink } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="overlay"></div>
      <div className="logo">آسيا البركاتي</div>
      <div className="hero_text">
        شركة متخصصة في تصوير الزواجات والمناسبات بخبرة أكثر من 10 سنوات نحن لا
        نلتقط لقطات مجرّدة بل نصنع من كُل لحظة جميلة لقطة مليئة بالمشاعر لتعيش
        معكم للأبد 
      </div>
      {/* <div className="linksicon">
        <FaLink />
      </div> */}
    </div>
  );
}

export default Hero;
