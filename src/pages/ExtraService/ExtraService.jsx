import React from "react";
import { FaFile, FaStar } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import "./ExtraService.css";

const ExtraService = () => {
  const services = [
    {
      price: "3,000 درهم",
      service: "فيديو عرض تشويقي ينعرض قبل زفة العروس",
    },
    {
      price: "1,000 درهم",
      service: "تفطية الزواج بالجوال تغطية احترافية خاص للعروس واستلامه بنفس اليوم",
    },
    
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
            <motion.li variants={listItemVariants}>- لتأكيد الحجز يتم تحويل عربون بقيمة 1000 درهم</motion.li>
            <motion.li variants={listItemVariants}>- العربون غير قابل لللإسترجاع لأي ظرف كان ولكن من الممكن تبديل اليوم بيوم مناسب خلال سنة واحدة على حسب توفر التاريخ</motion.li>
            <motion.li variants={listItemVariants}>- يسلم المبلغ المتبقي (تحويل بنكي) قبل المناسبة ب 24 ساعة</motion.li>
            <motion.li variants={listItemVariants}>- ساعات التصوير متواصلة يتم تحديدة من قببل العروس</motion.li>
            <motion.li variants={listItemVariants}>- عند الرغبة بإضافة ساعات إضافية قيمة كل ساعة إضافية 500 درهم</motion.li>
            <motion.li variants={listItemVariants}>- التصوير خارج دبي إضافة مبلغ 500 درهم لجميع الإمارات ما عدا المنطقة الغربية إضافة 900 درهم</motion.li>
            <motion.li variants={listItemVariants}>- يتم ارسال جميع الصور عبر غوغل درايف لاختيار الصور المراد طباعتها من قبل العروس بعد المناسبةخلال 10 أيام</motion.li>
            <motion.li variants={listItemVariants}>- يتم تسليم الألبومات والفيديو معا خلال مده أقصاها 2-3أشهر بعد اختيار الصور وإرسالها</motion.li>
            <motion.li variants={listItemVariants}>- يتم اختيار لون الألبوم والخامات من قبل العروس</motion.li>
            <motion.li variants={listItemVariants}>- طباعة الألبومات يتم داخل المعمل الخاص بنا وتحت إشراف المصورة آسيا وطاقم نسائي 100%</motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default ExtraService;
