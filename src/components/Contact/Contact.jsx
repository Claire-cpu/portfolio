import React from "react";
import styles from "./Contact.module.scss";
import image from "../../assets/img/avatar-toned.jpg";
import Typewriter from "../Typewriter/Typewriter";
export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            <Typewriter text="Let's Connect" />
          </h2>
        </div>
        <div className={styles.row}>
          <div className={styles.detailsCol}>
            <div className={styles.formText}>
              <h4 className={styles.detailsTitle}>Details</h4>
              <div className={styles.detailsUnderline}></div>
              <p className={styles.detailsDesc}>
                Whether you need a complete web application, AI integration, or
                technical consultation, I'm here to help bring your ideas to
                life.
              </p>

              <p>
                <span className={styles.icon}>📱</span> 1-289-885-7262
              </p>
              <p>
                <span className={styles.icon}>✉️</span>{" "}
                xiaoyizhang9323@outlook.com
              </p>
            </div>
          </div>
          <div className={styles["img_container"]}>
            <img src={image} className={styles["img_container__img"]} />
          </div>
        </div>
      </div>
    </section>
  );
}
