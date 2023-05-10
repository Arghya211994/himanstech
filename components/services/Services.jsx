import React from "react";
import styles from "./Services.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { SiMaterialdesignicons } from "react-icons/si";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { SiDigitalocean } from "react-icons/si";
import { GiAbstract030 } from "react-icons/gi";

import {motion} from "framer-motion"

const servicedata = [
  {
    id: 1,
    logo: <SiMaterialdesignicons />,
    heading: "UI-UX Creativity",
    para: "We are masters in providing the best digital experience to your customers in the digital world. Our UI/UX designing team will exceed your expectations in the process of digitizing.",
  },

  {
    id: 2,
    logo: <MdOutlineDeveloperBoard />,
    heading: "Web Development",
    para: "We specialize in customized web development solutions that meet your unique requirements. Our collaborative approach ensures a website that represents your brand and enhances user experience.    .",
  },

  {
    id: 3,
    logo: <SiDigitalocean />,
    heading: "App Development",
    para: "Combines industry best practices and cutting-edge technologies to build secure and scalable software. From creating new apps to enhancing existing ones, we help achieve your business goals."
  },
  {
    id: 4,
    logo: <GiAbstract030 />,
    heading: "Digital Marketing",
    para: "Himanstech uses advanced technologies and strategies for SEO, SMM, email marketing, PPC advertising, and content marketing. We guarantee effective business solutions tailored to your needs.",
  },

  {
    id: 6,
    logo: <MdOutlineDeveloperBoard />,
    heading: "FullStack Developmnt",
    para: "Our experienced full-stack developers integrate front-end and back-end technologies to create scalable and efficient apps. From database design to user interface development, we manage every aspect of full-stack development.",
  },

  {
    id: 7,
    logo: <MdOutlineDeveloperBoard />,
    heading: "Data Analytics",
    para: " At Himanstech, we work closely with clients, understanding their goals to create innovative strategies for measurable results. Get data mining, predictive modeling, and statistical analysis support for your business goals",
  },
];

const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className={`${styles.service}`} id="services">
        <h1 className={`${styles.heading}`} style={{ textAlign: "center" }}>
          Our Services
        </h1>
        <p className={styles.para}>Welcome you to <strong>Himanstech.</strong> A leading Web designing, Development, Digital marketing, UI/UX designing company with a vision to help realize our client’s digital dreams and execute them to perfection. Your one stop shop for Digital Marketing, App Development, UI/UX, Web Development, .</p>
        <Carousel
          responsive={responsive}
          className={`${styles.carousel}`}
          swipeable={false}
          transitionDuration={200}
        >
          {servicedata.map((data) => {
            return (
              <>
                <div className={`${styles.cardbody}`}>
                  <motion.div className={`${styles.cardLogo}`}
                  whileHover={{rotate:360,backgroundColor:"#1E1E1E",boxShadow:"2px 2px 25px rgba(0,0,0,0.5)"}}
                  transition={{duration:0.6}}
                  >{data.logo}</motion.div>

                  <div className={`${styles.cardText}`}>
                    <p className={`${styles.para}`}>{data.heading}</p>

                    <p>{data.para}</p>
                  </div>

                  <div className={`${styles.cardButton}`}>
                    <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                    >Read More</motion.button>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </section>
    </>
  );
};

export default Services;
