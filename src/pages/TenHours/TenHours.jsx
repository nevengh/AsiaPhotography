import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";
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
        <h1 className="title_header">الباقة البرونزية</h1>
        
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
          {/* <h3>تصوير فوتوغرافي ل :</h3> */}
          <ul className="choices_list">
            <li>مدة التصوير 3 ساعات</li>
            <li>
              <h3>محتويات الباقة:</h3>
              <p>فوتو</p>

            </li>
            <li>
              <h3>تصوير الفوتو يشمل:</h3>
              <p>عدد لا محدود من الصور مع البومين</p>
              <p className='video_info'>(ألبوم مقاس 10*10 يشمل على 40 صورة معدلة للعرسان شاملة التفاصيل-ألبوم مقاس A5 يشمل 15 صورة معدلة للأهل)</p>
              <p>فلاش يجمع جميع الصور الملتقطة</p>
            </li>
            
          </ul>
          
        </motion.div>
      </motion.div>

      <p className="Price">سعر الباقة: 3,500 درهم</p>
    </div>
  );
};

export default TenHours;
