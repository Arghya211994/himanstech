import React from "react";
import styles from "./CommonPage.module.css";
import Image from "next/image";

const CommonPage = ({hero_banner_img, heading,heading_para,overview_head,overview_para,overview2_left_img,overview2_right_head,overview2_right_para,overview2_right_head2,overview2_right_list1,overview2_right_list2,overview2_right_list3,overview2_right_list4,overview2_right_list5,overview2_right_list6,
    overview2_right_list7 }) => {
  return (
    <>
      <section className={styles.commonpage}>
        <Image src={hero_banner_img} alt="" width={100} height={100} />
        <div className={styles.overlay}></div>
        <div className={styles.commonpage_content}>
            <p>{heading}</p>
        </div>
      </section>

      <section className={styles.overview}>
         <p>{overview_head}</p>
         <p>{overview_para}</p>

         <section className={styles.overview2}>
            <div className={styles.overview2_left}>
                <Image src={overview2_left_img} alt="overview_image"  width={100} height={65}/>
            </div>

            <div className={styles.overview2_right}>
                <p className={styles.overview2_right_heading}>{overview2_right_head}
                </p>

                <p>{overview2_right_para}</p>

                <p className={styles.overview2_right_heading2}>{overview2_right_head2}</p>

                <ul>
                    <li>{overview2_right_list1}</li>
                    <li>{overview2_right_list2}</li>
                    <li>{overview2_right_list3}</li>
                    <li>{overview2_right_list4}</li>
                    <li>{overview2_right_list5}</li>
                    <li>{overview2_right_list6}</li>
                    <li>{overview2_right_list7}</li>
                </ul>
            </div>
        </section>

        <section className={styles.technology}>
            <p>Technology</p>

            <main className={styles.technology_grid}>
                <div className={styles.technology_image}>
                    <Image src="/Java.png" alt=""  height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/NodeJS.png" alt="" height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/OpenSuse.png" alt=""  height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/azure-logo.png" alt="" height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/Python.png" alt="" height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/Redis.png" alt="" height={100} width={100}/>
                </div>

                    {/* second-row */}
                <div className={styles.technology_image}>
                    <Image src="/Redhat.png" alt="" height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/Php.png" alt="" height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/Net.png" alt="" height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/Scala-1.png" alt="" height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/Ubuntu.png" alt="" height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/MongoDb.png" alt="" height={100} width={100}/>
                </div>

                {/* third-row */}

                <div className={styles.technology_image}>
                    <Image src="/MySQL.png" alt="" height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/Spark.png" alt="" height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/SQL-Server.png" alt="" height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/BigQuery.png" alt="" height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/Nginx.png" alt="" height={100} width={100}/>
                </div>

                <div className={styles.technology_image}>
                    <Image src="/Debian.png" alt="" height={100} width={100}/>
                </div>
            </main>
        </section>
      </section>

    </>
  );
};

export default CommonPage;
