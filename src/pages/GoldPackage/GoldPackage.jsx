import './GoldPackage.css'
import { motion } from "framer-motion";
import { FaCamera, FaVideo } from "react-icons/fa";
const GoldPackage = () => {
   // Animation variants for different sections
   const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="TenHours"
      id="Gold_hour"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      variants={sectionVariants}
    >
      <div className="section_header">
        <h1 className="title_header">الباقة الذهبية للأعراس</h1>
      </div>

      <motion.div
        className="photography"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
        variants={sectionVariants}
      >
        <div className="camera_icon">
          <motion.div
            className="left_line"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
          ></motion.div>
          <motion.div variants={iconVariants}>
            <FaCamera />
          </motion.div>
          <motion.div
            className="right_line"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
          ></motion.div>
        </div>
        <motion.div
          className="photography_list"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={sectionVariants}
        >
          
          <ul className="choices_list">
            <li>مدة التصوير 6 ساعات</li>
            <li>
              <h3>
              محتويات الباقة:</h3>
              <p>فوتو + فيديو</p>
            </li>
            <li>
              <h3>تصوير الفوتو يشمل  :</h3>
              {/* <p>عدد لا محدود من الصور</p> */}
              <p>-استلام ألبومين فاخرين من خامات ايطالية من اختيار العروس</p>
              <p className='video_info'>(البوم مقاس 12*12 يشمل 55 صورة للعرسان شامل تفاصيل المعالجة-ألبوم مقاس A5 يشمل طباعة 20 صورة للأهل مع المعالجة)</p>
              <p>استلام فلاش بكامل اللقطات الملتقطة</p>
              <p>استلام صورة على لوحة خشبية</p>
              </li>
            
          </ul>
          <p className="no_limit_text">(عدد لا محدود من الصور )</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="cinema"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
        variants={sectionVariants}
      >
        <div className="camera_icon">
          <motion.div
            className="left_line"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
          ></motion.div>
          <motion.div variants={iconVariants}>
            <FaVideo />
          </motion.div>
          <motion.div
            className="right_line"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
          ></motion.div>
        </div>
        <motion.div
          className="photography_list"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={sectionVariants}
        >
          <h3>الفيديو يشمل:</h3>
          <p>(تصوير تفاصيل المكان-تفاصيل العروسة-لبس العروسة الطقم والتعطير كلقطات تجهيزية-زفة العروس-زفة العريس-تقطيع الكيكة)</p>
          <ul className="choices_list">
            <li>استلام عدد فيديوهات 2 (فيديو اساسي - فيديو هايلايت)</li>
            
          </ul>
        </motion.div>
      </motion.div>
       <p className="Price">سعر الباقة:6,950 درهم</p>
    </motion.div>
  );
}

export default GoldPackage