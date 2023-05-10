import React, { useState } from "react";
import styles from "./Why.module.css";
import { BiBookReader } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoPricetag } from "react-icons/io5";
import { BiBook } from "react-icons/bi";

import { motion } from "framer-motion";

const Why = () => {
  const [hovering1, setHovering1] = useState(false);
  const [hovering2, setHovering2] = useState(false);
  const [hovering3, setHovering3] = useState(false);
  const [hovering4, setHovering4] = useState(false);
  

  const hoverContentVariants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  const hoverContentVariants2 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const cardVariants = {
    initial: {
      scale: 0.95,
      boxShadow: "0px 2px 8px rgb(255, 255, 255,0.7) ",
    },
    hover: {
      scale: 1,
      boxShadow: "0px 2px 15px rgb(255, 255, 255,0.7)",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section className={`${styles.why}`} id="why-us">
        {/* left-div start*/}
        <div className={`${styles.why_left}`}>
          <h2 style={{ fontSize: "33px" }}>Why Choose us?</h2>
          <p style={{ fontSize: "18px" }}>
          At Himanstech, we recognize that every business is different and deserves a customized approach. Because of this, we take the time to comprehend your objectives, difficulties, and achievement vision. Take the time to comprehend your objectives, difficulties, and achievement vision because of this. Our team of industry experts collaborates directly with you to develop solutions that are specifically created to support the success of your business online. We take great satisfaction in offering customers unmatched outcomes and customer service.
          </p>
          <motion.button
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
          >Get in Touch</motion.button>
        </div>
        {/* left-div end */}

        {/* right-div start */}
        <div className={`${styles.why_right}`}>
        <motion.div
            className={`${styles.right_div}`}
            onMouseEnter={() => setHovering1(true)}
            onMouseLeave={() => setHovering1(false)}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            {hovering1 ? (
              <motion.p
                className={`${styles.hov_content}`}
                variants={hoverContentVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
              >
                We believe every business is unique and to meet the requirements we have flexible and customised - tailored solutions as per your requirement.
              </motion.p>
            ) : (
              <>
                <motion.div
                  className={`${styles.right_logo}`}
                  style={{ backgroundColor: "#6ab43e", color: "white" }}
                  variants={hoverContentVariants2}
                  initial="hidden"
                  animate="visible"
                >
                  <AiFillThunderbolt/>
                </motion.div>
                <div>
                  <motion.p
                    variants={hoverContentVariants2}
                    initial="hidden"
                    animate="visible"
                  >
                    Customized Solutions
                  </motion.p>
                </div>
              </>
            )}
          </motion.div>

          <motion.div
            className={`${styles.right_div}`}
            onMouseEnter={() => setHovering2(true)}
            onMouseLeave={() => setHovering2(false)}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            {hovering2 ? (
              <motion.p
                className={`${styles.hov_content}`}
                variants={hoverContentVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
              >
                We prioritize clients, delivering the best solutions and ongoing support to foster long-term relationships
              </motion.p>
            ) : (
              <>
                <motion.div
                  className={`${styles.right_logo}`}
                  style={{ backgroundColor: "#6ab43e", color: "white" }}
                  variants={hoverContentVariants2}
                  initial="hidden"
                  animate="visible"
                >
                  <IoPricetag />
                </motion.div>
                <div>
                  <motion.p
                    variants={hoverContentVariants2}
                    initial="hidden"
                    animate="visible"
                  >
                    Client Centric Approach
                  </motion.p>
                </div>
              </>
            )}
          </motion.div>

          <motion.div
            className={`${styles.right_div}`}
            onMouseEnter={() => setHovering3(true)}
            onMouseLeave={() => setHovering3(false)}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            {hovering3 ? (
              <motion.p
                className={`${styles.hov_content}`}
                variants={hoverContentVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
              >
                We are committed to delivering high-quality projects while following industry best practices and standards with a track record of delivering projects on time and within budget
              </motion.p>
            ) : (
              <>
                <motion.div
                  className={`${styles.right_logo}`}
                  style={{ backgroundColor: "#6ab43e", color: "white" }}
                  variants={hoverContentVariants2}
                  initial="hidden"
                  animate="visible"
                >
                  <BiBook/>
                </motion.div>
                <div>
                  <motion.p
                    variants={hoverContentVariants2}
                    initial="hidden"
                    animate="visible"
                  >
                    Quality and timely delivery
                  </motion.p>
                </div>
              </>
            )}
          </motion.div>

          <motion.div
            className={`${styles.right_div}`}
            onMouseEnter={() => setHovering4(true)}
            onMouseLeave={() => setHovering4(false)}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            {hovering4 ? (
              <motion.p
                className={`${styles.hov_content}`}
                variants={hoverContentVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8 }}
              >
                Our team of developers and designers are experts in diverse technologies and we always use state of the art technologies with the latest industry trends and advancements to ensure that your project is built with the latest technology stack to execute projects

              </motion.p>
            ) : (
              <>
                <motion.div
                  className={`${styles.right_logo}`}
                  style={{ backgroundColor: "#6ab43e", color: "white" }}
                  variants={hoverContentVariants2}
                  initial="hidden"
                  animate="visible"
                >
                  <BiBookReader/>
                </motion.div>
                <div>
                  <motion.p
                    variants={hoverContentVariants2}
                    initial="hidden"
                    animate="visible"
                  >
                    Diverse Technologies 
                  </motion.p>
                </div>
              </>
            )}
          </motion.div>
        </div>
        {/* right-div end */}
      </section>
    </>
  );
};

export default Why;
