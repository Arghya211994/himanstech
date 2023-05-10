import styles from "./Footer.module.css";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { GrPinterest } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <section className={`${styles.footer}`}>
           <div className={styles.demo}>
            <nav></nav>
           </div>
           <div className={styles.demo2}>
            <nav></nav>
           </div>
      <div className={`${styles.footer_div_1}`}>
      <div className={styles.logo}>
          <Image src="/logo_himanstech_white.svg" alt="" width={200} height={45}/>
        </div>
        <p>
        At Himanstech we believe in the power of technology and provide top-notch services and solutions to help people and organizations enhance their lives and enterprises. Join us in our quest to make the digital world a more welcoming and inclusive place.
        </p>

        <div>
          <span>
            <BsTwitter />
          </span>
          <span>
            <FaFacebookSquare />
          </span>
          <span>
            <GrPinterest />
          </span>
          <span>
            <FaInstagramSquare />
          </span>
        </div>
      </div>

      <div className={`${styles.common_footer_div}`}>
        <h3>Contacts</h3>
        <p>
          Address: <span> Module 102, Webel IT Park, Phase II,
Buddhapark, Kalyani, West Bengal 741235</span>
        </p>

        <p>
          Email: <span> info@himanstech.com</span>
        </p>

        <p>
        Phone: <span> +91 8334061823</span>
        </p>
      </div>

      <div className={`${styles.common_footer_div}`}>
        <h3>Services</h3>
        <p>
        <span>Product Strategy</span>
        </p>

        <p>
        <span> Product Engineering</span>
        </p>

        <p>
        <span> Architecture</span>
        </p>

        <p>
        <span> UX / UI Design</span>
        </p>

        <p>
        <span> App Development</span>
        </p>
      </div>

      <div className={`${styles.common_footer_div}`}>
        <h3>Support</h3>
        <p>
        <span>Forums</span>
        </p>

        <p>
        <span> Documentation</span>
        </p>

        <p>
        <span> Terms</span>
        </p>

        <p>
        <span> Comminity</span>
        </p>

      </div>
    </section>

    <section className={styles.subfooter}>
        <p>Copyright © 2022 Himans<strong>Tech.</strong> All rights reserved.</p>
    </section>
    </>
  );
};

export default Footer;

{
  /* <div>
<h3>Support</h3>
<p>Forums</p>
<p>Documentation</p>
<p>Terms</p>
<p>Comminity</p>
</div> */
}
