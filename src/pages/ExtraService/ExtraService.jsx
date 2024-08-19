import React from "react";
import { FaFile, FaStar } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import "./ExtraService.css";

const ExtraService = () => {
  const services = [
    {
      price: "6500 ريال",
      service: "فيديو كرين سينمائي (الرافعة) لتغطية الحفل مدة 8 ساعات متواصلة",
    },
    {
      price: "2500 ريال",
      service: "فيديو شتوفي يعرض قبل الزفة + شاشة عرض 3 متر + جهاز بروجكتر",
    },
    {
      price: "1500 ريال",
      service:
        "تصوير فيديو جوي باستخدام الدرون لبعض المقاطع للقاعة والزفة الاولى",
    },
    {
      price: "1000 ريال",
      service: "تصوير القاعة فيديو ومونتاج خاص للقاعة وتفاصيلها",
    },
    { price: "1000 ريال", service: "شاشة الكترونية لعرض الفيديوهات" },
    { price: "700 ريال", service: "توفير كشف متابعة بالقاعه للزفة" },
    { price: "300 ريال", service: "توفير مايكات لتصوير الفستان" },
  ];

  const tableRef = React.useRef(null);
  const listRef = React.useRef(null);
  const isTableInView = useInView(tableRef, { once: true, amount: 0.2 });
  const isListInView = useInView(listRef, { once: true, amount: 0.2 });

  const tableVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const listVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="ExtraService" id="additions">
      <div className="section_header">
        <h1 className="title_header"> الخدمات الإضافية</h1>
        <h3 className="sub_title"> خدمات إضافية من الممكن إضافتها للباقات</h3>
        <div className="camera_icon">
          <div className="left_line"></div>
          <FaStar />
          <div className="right_line"></div>
        </div>
      </div>
      <div className="table-container" ref={tableRef}>
        <motion.table
          variants={tableVariants}
          initial="hidden"
          animate={isTableInView ? "visible" : "hidden"}
        >
          <thead>
            <tr>
              <th>الخدمات</th>
              <th>الأسعار</th>
            </tr>
          </thead>
          <motion.tbody>
            {services.map((item, index) => (
              <motion.tr key={index} variants={rowVariants}>
                <td>{item.service}</td>
                <td>{item.price}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </motion.table>
      </div>

      {/* ملاحظات مهمة للعميل */}
      <div className="important_info">
        <div className="section_header">
          <h1 className="title_header">ملاحظات مهمة للعميل</h1>
        </div>
        <div className="camera_icon">
          <div className="left_line"></div>
          <FaFile />
          <div className="right_line"></div>
        </div>
        
        <div className="photography_list" ref={listRef}>
          <motion.ul 
            className="choices_list"
            variants={listVariants}
            initial="hidden"
            animate={isListInView ? "visible" : "hidden"}
          >
            <motion.li variants={listItemVariants}>تسليم 6 فيديوهات بمونتاج خاص لكل فيديو</motion.li>
            <motion.li variants={listItemVariants}>ألبوم حراري كبير يحتوي على 70 صورة معالجة.</motion.li>
            <motion.li variants={listItemVariants}>ألبوم حراري صغير يحتوي على 35 صورة معالجة.</motion.li>
            <motion.li variants={listItemVariants}>لوحة حائط خشبية مقاس 30×40.</motion.li>
            <motion.li variants={listItemVariants}>لوحة حائط خشبية مقاس 30×40.</motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default ExtraService;
