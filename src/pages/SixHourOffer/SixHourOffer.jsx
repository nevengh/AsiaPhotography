import { motion } from "framer-motion";
import { FaCamera, FaVideo } from "react-icons/fa";
import "./SixHourOffer.css";

function SixHourOffer() {
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
      className="SixHourOffer"
      id="six_hour"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      variants={sectionVariants}
    >
      <div className="section_header">
        <h1 className="title_header">الباقة الكلاسيكية</h1>
        <h3 className="sub_title">عقد القران</h3>
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
          {/* <h3>تصوير فوتوغرافي ل :</h3> */}
          <ul className="choices_list">
            <li>مدة التصوير ساعتين</li>
            <li>
              <h3>
              محتويات الباقة:</h3>
              <p>فوتو + فيديو</p>
            </li>
            <li>
              <h3>تصوير الفيديو يشمل :</h3>
              {/* <p>عدد لا محدود من الصور</p> */}
              <p>مع استلام البوم ايطالي من اختيار العروس مقاس 8*8 يشمل 25 صورة</p>
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
          <h3>الفيديو يشمل :</h3>
          <h3 className="sub_title">(لقطات ولحظة عقد القران- تصوير توقيع العرسان-تفاصيل بسيطة مع العرسان)</h3>
          <ul className="choices_list">
            <li>استلام فلاش بكامل اللقطات الملتقطة </li>
            
          </ul>
        </motion.div>
      </motion.div>

      {/* <motion.div
        className="photography"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.4 }}
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
            <FaFile />
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
          transition={{ duration: 0.8, delay: 0.7 }}
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
      </motion.div> */}
       <p className="Price">سعر الباقة:2,700 درهم</p>
    </motion.div>
  );
}

export default SixHourOffer;
