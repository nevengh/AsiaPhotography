import './SilverPackage.css'
import { motion } from "framer-motion";
import { FaCamera, FaVideo } from "react-icons/fa";
const SilverPackage = () => {
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
      id="silver_hour"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      variants={sectionVariants}
    >
      <div className="section_header">
        <h1 className="title_header">الباقة الفضية</h1>
        <h3 className="sub_title">للملكة أو الحنة</h3>
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
            <li>مدة التصوير 4 ساعات</li>
            <li>
              <h3>
              محتويات الباقة:</h3>
              <p>فوتو + فيديو</p>
            </li>
            <li>
              <h3>تصوير الفوتو يشمل : :</h3>
              {/* <p>عدد لا محدود من الصور</p> */}
              <p>-استلام ألبومين فاخرين من خامات ايطالية من اختيار العروس</p>
              <p className='video_info'>(البوم مقاس 10*10 يشمل 40 صورة للعرسان شامل التفاصيل مع المعالجة-البوم مقاس A5 يشمل طباعة 15 صورة للأهل مع لمعالجة)</p>
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
          <h3>الفيديو يشمل :</h3>
          <h3 className="sub_title">(تصوير تفاصيل المكان-تفاصيل العروسة-الزفة-التلبيس-تقطيع الكيكة-عقد القران إن وجد)</h3>
          <ul className="choices_list">
            <li>استلام (فيديو أساسي - فيديو هايلايت) </li>
            
          </ul>
        </motion.div>
      </motion.div>
       <p className="Price">سعر الباقة:5,400 درهم</p>
    </motion.div>
  );
}

export default SilverPackage