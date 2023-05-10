import styles from "./Header.module.css";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import CategoryMenu from "../category/Category";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { IoLogoWhatsapp } from "react-icons/io";

import { motion } from "framer-motion";
import MobileCategory from "../category/MobileCategory";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { Link} from 'react-scroll';


const Header = () => {
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className={`${styles.header}`}>
 
      {/* logo-start */}
      <Link href="/" className={styles.head}>
        <div className={styles.logo}>
          <Image src="/Himanstech_logo.svg" alt="" width={250} height={45}/>
        </div>
      </Link>
      {/* logo-end */}

      {/* nav-menu start */}

      <nav className={`${styles.nav}`}>
        <ul className={`${styles.ul}`}>
          {/* main menu mapping */}

          <li>
            {/* <a href="#home" className={`${styles.link}`}>Home</a> */}
            <Link to="home" spy={true} smooth={true} duration={50} className={`${styles.link}`} activeStyle={{color:"rgb(163 230 53)"}}>home</Link>
          </li>



          {/* category menu mapping */}
          <li
            className={`${styles.li} ${styles.link}`}
            onMouseEnter={() => setShowCatMenu(true)}
            onMouseLeave={() => setShowCatMenu(false)}
          >

            <Link to="services" spy={true} smooth={true} duration={50} activeStyle={{color:"rgb(163 230 53)"}} className={`${styles.link}`} >Our Services</Link>

            <CategoryMenu
              showCatMenu={showCatMenu}
              setShowCatMenu={setShowCatMenu}
            />
          </li>

          <li>
          <Link to="portfolio" spy={true} smooth={true} duration={50} activeStyle={{color:"rgb(163 230 53)"}} className={`${styles.link}`} >Portfolio</Link>
          </li>

          <li>
          <Link to="why-us" spy={true} smooth={true} duration={50} activeStyle={{color:"rgb(163 230 53)"}} className={`${styles.link}`} >Why-Us</Link>
          </li>

          <li>
          <Link to="contact" spy={true} smooth={true} duration={50} activeStyle={{color:"rgb(163 230 53)"}} className={`${styles.link}`} >Contact</Link>
          </li>
          {/* main menu mapping end */}

        </ul>
      </nav>

      {/* nav-menu end */}

      {/* whatsapp-logo start */}

      <div className={`${styles.endlogo}`}>
        <IoLogoWhatsapp />
      </div>
      {/* whatsapp-logo end */}

      {/* mobilemenu-part start*/}

      {/* mobile-menu-icon */}
      <motion.div
        className={`${styles.menubar}`}
        onClick={() => setMobileMenu((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {mobileMenu ? <RxCross2 /> : <BiMenuAltRight />}
      </motion.div>

      {/* mobile-menu-content */}

      {mobileMenu && (
        <>
          <motion.div
            className={styles.mobile_menu_nav}
            animate={{
              x: 0,
              opacity: 1,
            }}
            initial={{
              x: "-100vw",
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className={styles.menu_list}>
              <li>
              <Link to="home" spy={true} smooth={true} duration={50} className={`${styles.link}`} activeStyle={{color:"rgb(163 230 53)"}}
              onClick={() => setMobileMenu(false)}>home</Link>
              </li>

              <li
                className={`${styles.li} `}
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  className={` ${styles.link}`}
                  style={{ display: "flex", gap: "1rem" ,alignItems:"center"}}
                >
                  <Link to="services" spy={true} smooth={true} duration={50} activeStyle={{color:"rgb(163 230 53)"}} className={`${styles.link}`}
                  onClick={() => setMobileMenu(false)}
                  >Our Services</Link>
                  {showCatMenu ? (
                    <FiChevronUp
                      style={{ fontSize: "12px", fontWeight: "bolder" }}
                    />
                  ) : (
                    <FiChevronDown
                      style={{ fontSize: "12px", fontWeight: "bolder" }}
                    />
                  )}
                </div>

                <MobileCategory
                  showCatMenu={showCatMenu}
                  setShowCatMenu={setShowCatMenu}
                />
              </li>

              <li>
              <Link to="portfolio" spy={true} smooth={true} duration={50} activeStyle={{color:"rgb(163 230 53)"}} className={`${styles.link}`}
              onClick={() => setMobileMenu(false)} >Portfolio</Link>
              </li>

              <li>
              <Link to="why-us" spy={true} smooth={true} duration={50} activeStyle={{color:"rgb(163 230 53)"}} className={`${styles.link}`} 
              onClick={() => setMobileMenu(false)}>Why-Us</Link>
              </li>

              <li>
              <Link to="contact" spy={true} smooth={true} duration={50} activeStyle={{color:"rgb(163 230 53)"}} className={`${styles.link}`} 
              onClick={() => setMobileMenu(false)}>Contact</Link>
              </li>
            </div>
          </motion.div>
        </>
      )}
    </header>
  );
};

export default Header;

//    {/* mobilemenu-part start*/}

//  <div className={`${styles.menubar}`}
//  onClick={() => setMobileMenu((prev) => !prev)}>
//    {mobileMenu ?  <RxCross2/> : <BiMenuAltRight/>}
//  </div>

//  {mobileMenu && (
//    <>
//    <div className={`${styles.mobile} ${mobileMenu ? 'show' : ''}`}>
//    <ul className={`${styles.ul}`}>

//      {/* main menu mapping */}

//      {menu.map((menuitem) => {
//        return (
//          <>
//            <li key={menuitem.id}>
//              <Link href={`/${menuitem.url}`} className={`${styles.link}`}>
//                {menuitem.name}
//              </Link>
//            </li>
//          </>
//        );
//      })}
//      {/* category menu mapping */}
//      <li
//        className={` ${styles.link}`}
//        onMouseEnter={() => setShowCatMenu(true)}
//        onMouseLeave={() => setShowCatMenu(false)}
//      >
//        more
//        <CategoryMenu
//          showCatMenu={showCatMenu}
//          setShowCatMenu={setShowCatMenu}
//        />
//      </li>
//    </ul>
//    </div>
//    </>
//  )}

//    {/* category menu mapping */}
//    <li
//    className={`${styles.li} ${styles.link}`}
//    onMouseEnter={() => setShowCatMenu(true)}
//    onMouseLeave={() => setShowCatMenu(false)}
//  >
//    more
//    <CategoryMenu
//      showCatMenu={showCatMenu}
//      setShowCatMenu={setShowCatMenu}
//    />
//  </li>
