import React from "react";
import styles from "./About.module.scss";
import meImg from "../../assets/img/avatar-toned.jpg";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imgCol}>
          <img src={meImg} alt="Profile" className={styles.imgMe} />
        </div>
        <div className={styles.textCol}>
          <h2 className={styles.heading}>About me</h2>

          <h3 className={styles.name}>Cara Zhang</h3>
          <h4 className={styles.role}>Software Engineer</h4>
          <p className={styles.desc}>
            I'm a passionate full-stack developer with expertise in AI
            development, data engineering, and project management. I specialize
            in building intelligent applications to solve real-world problems. I
            also bring professional expertise in requirements gathering, sprint
            planning, and stakeholder communication to the table. My main tech
            stacks mainly involve full-stack development, API construction,
            database design, AI agent implementation, and cloud engineering. As
            a team player, I believe that empathy, collaboration, and morale are
            essential to delivering impactful and high-quality solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
