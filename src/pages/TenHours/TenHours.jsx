import { motion } from "framer-motion";
import { FaCamera, FaFile, FaVideo } from "react-icons/fa";
import "./TenHours.css";

const TenHours = () => {
  // Animation variants for different elements
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="TenHours" id="ten_hour">
      {/* Section Header */}
      <div className="section_header">
        <h1 className="title_header">باقة 10 ساعات</h1>
        <h3 className="sub_title ten_hours_sub_title">توثيق جميع التفاصيل</h3>
      </div>

      {/* Photography Section */}
      <motion.div
        className="photography"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={sectionVariants}
      >
        <div className="camera_icon">
          <motion.div
            className="left_line"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
          ></motion.div>
          <motion.div variants={iconVariants}>
            <FaCamera />
          </motion.div>
          <motion.div
            className="right_line"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
          ></motion.div>
        </div>
        <motion.div
          className="photography_list"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={sectionVariants}
        >
          <h3>تصوير فوتوغرافي ل :</h3>
          <ul className="choices_list">
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
          </ul>
          <p className="no_limit_text">(عدد لا محدود من الصور )</p>
        </motion.div>
      </motion.div>

      {/* Cinema Section */}
      <motion.div
        className="cinema"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={sectionVariants}
      >
        <div className="camera_icon">
          <motion.div
            className="left_line"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
          ></motion.div>
          <motion.div variants={iconVariants}>
            <FaVideo />
          </motion.div>
          <motion.div
            className="right_line"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
          ></motion.div>
        </div>
        <motion.div
          className="photography_list"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={sectionVariants}
        >
          <h3>تصوير فيديو سينمائي مع مونتاج لـ:</h3>
          <ul className="choices_list">
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
            <li>ديكور القاعة.</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Additional Photography Section */}
      <motion.div
        className="photography"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={sectionVariants}
      >
        <div className="camera_icon">
          <motion.div
            className="left_line"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
          ></motion.div>
          <motion.div variants={iconVariants}>
            <FaFile />
          </motion.div>
          <motion.div
            className="right_line"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
          ></motion.div>
        </div>
        <motion.div
          className="photography_list"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={sectionVariants}
        >
          <h3>يتضمن :</h3>
          <ul className="choices_list">
            <li>تسليم 6 فيديوهات بمونتاج خاص لكل فيديو</li>
            <li>ألبوم حراري كبير يحتوي على 70 صورة معالجة.</li>
            <li>ألبوم حراري صغير يحتوي على 35 صورة معالجة.</li>
            <li>لوحة حائط خشبية مقاس 30×40.</li>
            <li>لوحة حائط خشبية مقاس 30×40.</li>
          </ul>
          <p className="Price">سعر الباقة: 19,900 ريال</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TenHours;
