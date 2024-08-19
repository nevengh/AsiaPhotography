// import { FaLink } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="logo">آسيا البركاتي</div>
      <div className="hero_text">
        شركة متخصّصة بتصوير الأعراس والمناسبات بخبرة أكثر من ١٠ سنوات لأن كل
        التفاصيل مُهمّة وكل لحظة فيها حكاية نحرص على توثيق مشاعِركم بأجمل
        اللقطات العفوية
      </div>
      {/* <div className="linksicon">
        <FaLink />
      </div> */}
    </div>
  );
}

export default Hero;
