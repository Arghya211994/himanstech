import React from 'react'
import styles from "./Faq.module.css"
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {FiArrowDownCircle} from "react-icons/fi"
import {FiArrowUpCircle} from "react-icons/fi"


const Faq = () => {

    const [activeIndex, setActiveIndex] = useState(null)

    const toggleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    const items = [
        {
            title:'What services do we offer?',
            content: "We offer a range of services, including web development, digital marketing, app development, UI/UX design, and full-stack development. We provide customized solutions tailored to meet your specific needs."
        },
        {
            title:'How do we ensure the security of its services?',
            content: "We take security seriously. We implement industry-standard security protocols and use the latest tools and techniques to ensure that your data and projects are safe. We also provide ongoing security updates and maintenance to prevent any potential breaches."
        },
        {
            title:'What sets us apart from other digital marketing agencies?',
            content: "Our client-centered approach sets us apart. We prioritize your needs and work collaboratively with you to ensure that we provide the best possible service. We also offer flexible engagement models and technologies, ensuring that we can provide the best solution for your business."
        },
        {
            title:' How long does it take to complete a project?',
            content: "The timeline for each project varies depending on its scope and requirements. We work with you to establish a realistic timeline that aligns with your business goals. We also provide regular updates throughout the project to ensure transparency and accountability."
        },
        {
            title:'How can I get started ?',
            content: "Getting started is easy. Simply contact us through our website or by email, phone, or live chat. Our team will work with you to understand your needs and provide a customized solution that meets your requirements."
        }
    ]
   
  return (
    <>
    <section className={styles.faq}>
        <h2 style={{fontSize:"30px",textAlign:"center",marginBottom:"30px"}}>Frequently Asked Questions(FAQ)</h2>
        {items.map((item,index) => (
            <div key={item.title} className={styles.accordian}>
                <motion.header onClick={() => toggleIndex(index)} className={styles.header} >
                    <motion.p>{item.title}</motion.p>
                    <motion.span>{activeIndex === index ? <motion.div className={styles.icon}
                    animate={{rotate:360}}
                    transition={{type:'tween',duration:.5}}
                    ><FiArrowUpCircle/></motion.div> : <motion.div className={styles.icon}
                    animate={{rotate:0}}
                    transition={{type:'tween',duration:.5}}
                    ><FiArrowDownCircle/></motion.div>}</motion.span>
                </motion.header>
                <AnimatePresence>
                    {activeIndex === index && (
                        <motion.section
                        initial={{opacity:0, height:0}}
                        animate={{opacity:1, height:"160px"}}
                        exit={{opacity:0, height:0}}
                        className={styles.section}
                        >
                            <p>{item.content}</p>
                        </motion.section>
                    )}
                </AnimatePresence>
            </div>
        ))}
    </section>
    </>
  )
}

export default Faq

