import './VIP.css'
import { motion } from "framer-motion";
import { FaCamera, FaVideo } from "react-icons/fa";
const VIP = () => {
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
      id="Vip_hour"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      variants={sectionVariants}
    >
      <div className="section_header">
        <h1 className="title_header">باقة الVIP</h1>
        <h3 className="sub_title">للتصوير السينمائي</h3>
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
            <li>مدة التصوير 10 ساعات</li>
            <li>
              <h3>
              محتويات الباقة:</h3>
              <p>فوتو + فيديو</p>
            </li>
            <li>
              <h3>تصوير الفوتو يشمل  :</h3>
              <p>- تصوير زواج النساء بعدد لا محدود من الصور</p>
             <p>استلام 3 ألبومات ايطالية فاخرة من اختيار العروس</p>
             <p>(ألبوم مقاس 30*80 يشمل على 100 صورة للعرسان شاملة التفاصيل مع المعالجة-ألبوم مقاس A4 بانوراما يشمل طباعة 20 صورة للأصدقاء مع المعالجة)</p>
              <p>لوحة خشبية للعرسان مقاس A3</p>
              <p>تصوير فوتو لزواج الرجال مع استلام الصور عبر الرابط</p>
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
          
          <ul className="choices_list">
            <li><p>تصوير زواج النساء والرجال</p></li>
            <li>
                <p className='video_info'>(تصوير تفاصيل المكان-تصوير تفاصيل العروسه-تجهيزات العروسه-لقطات عفوية ولقاءات مع الاهل والأصدقاء-زفة اولى*بري زفه* زفة العروسة-زفة العريس-تقطيع الكيكة -عرض تشويقي للعروس على شاشة بروجيكتر ينعرض للضيوف قبل زفة العروسة-فيديو كرين لكامل الزواج)</p>
            </li>
            <li>تصوير زواج الرجال(فيديو ارضي-فيديو كرين لكامل الزواج)</li>
            <li>
                <h3>مع استلام عدد فيديوهات:</h3>
                <p>-استلام فيديو أساسي لزواج النساء</p>
                <p>استلام فيديو هايلات لزواج النساء -</p>
                <p>-استلام فيديو كرين كامل لزواج النساء</p>
                <p>-استلام فيديو اساسي لزواج الرجال</p>
                <p>-استلام فيديو كرين كامل لزواج الرجال</p>
                <p>-استلام فيديو العرض التشويقي للعروس</p>
            </li>
            
          </ul>
        </motion.div>
      </motion.div>
       <p className="Price">سعر الباقة:23,300 درهم</p>
    </motion.div>
  );
}

export default VIP;