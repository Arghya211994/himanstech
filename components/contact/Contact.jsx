import React from "react";
import styles from "./Contact.module.css";

import { MdLocationPin } from "react-icons/md";
import { BiPhoneIncoming } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className={`${styles.contact}`} id="contact">
      <div className={`${styles.contact_left}`}>
        <div className={`${styles.contact_left_content}`}>
          {/* <p>Contact Us</p> */}
          <h1>Get In Touch With Us</h1>
          <p>
          Don&apos;t be shy, drop us a line! We&apos;re all ears! Contact us now to chat with our team of digital gurus and take your online game to the next level.
          </p>

          <div className={`${styles.location}`}>
            <div className={`${styles.location_part}`}>
              <div className={`${styles.location_part_logo}`}>
                <MdLocationPin />
              </div>
              <div className={`${styles.location_part_content}`}>
                <p>Our Location</p>
                <p>
                  Module 102, Webel IT Park, Phase II, Buddhapark, Kalyani, West
                  Bengal 741235
                </p>
              </div>
            </div>

            <div className={`${styles.location_part}`}>
              <div className={`${styles.location_part_logo}`}>
                <BiPhoneIncoming />
              </div>
              <div className={`${styles.location_part_content}`}>
                <p>Phone Number</p>
                <p>+91 8334061823</p>
              </div>
            </div>

            <div className={`${styles.location_part}`}>
              <div className={`${styles.location_part_logo}`}>
                <MdEmail />
              </div>
              <div className={`${styles.location_part_content}`}>
                <p>Email Address</p>
                <p>info@himanstech.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.contact_right}`}>
        <div className={`${styles.contact_right_content}`}>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Message" />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            Send Message
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
