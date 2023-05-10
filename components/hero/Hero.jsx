import React from "react";
import styles from "./Hero.module.css";
import ReactTypingEffect from "react-typing-effect";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  
  return (
    <>
      <section className={`${styles.hero}`} id="home">
        <div className={`${styles.left}`}>
          <div className={`${styles.left_content}`}>
            <div>
              <h1 style={{ textTransform: "uppercase" }}>
              Revolutionize your Digital presence with 
              </h1>
              <ReactTypingEffect
                text={["HIMANSTECH!"]}
                cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                typingDelay={1000}
                eraseDelay={1000}
                speed={100}
                className={`${styles.typewritter}`}
                displayTextRenderer={(text, i) => {
                  return (
                    <h1>
                      {text.split("").map((char, i) => {
                        const key = `${i}`;
                        return <span key={key}>{char}</span>;
                      })}
                    </h1>
                  );
                }}
              />
            </div>

            <p>
            Do you find it difficult to see results from your <strong>digital marketing</strong> and <strong>web development</strong> efforts ? Make room for our expert teams and cutting-edge technologies to rock your market. Contact us now to discover your real digital potential.
            </p>
            {/* <button>Know More</button> */}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Know More
            </motion.button>
          </div>
        </div>

        <div className={`${styles.right}`}>
          <motion.img
            src="/Hero.png"
            alt="Herobg"
            animate={{
              y: [-10, 15],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
