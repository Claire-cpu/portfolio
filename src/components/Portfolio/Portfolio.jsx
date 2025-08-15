import React from "react";
import styles from "./Portfolio.module.scss";
import img1 from "../../assets/img/portfolio/interview_prep.png";
import img2 from "../../assets/img/portfolio/to-do.png";
import img3 from "../../assets/img/portfolio/instock.png";
import img4 from "../../assets/img/portfolio/snap.png";
import img5 from "../../assets/img/portfolio/highlander.png";
import img6 from "../../assets/img/portfolio/6.jpg";

const projects = [
  {
    img: img1,
    name: "Project Name",
    category: "AI-Powered Interview Prep App",
    description:
      "Integrate AI agent with mocking interviews and resume upgrade. Collaborated with 2 team members in constructing the cloud-based full-stack project.",
    techStack:
      "React, JavaScript, SASS, Node.js, Express, DynamoDB, AWS, Qdrant, Gemini AI",
  },
  {
    img: img2,
    name: "Project Name",
    category: "AI-Powered Task Management App",
    description:
      "Feature a full-stack task management app that automate tasks creation in bulk and improve time management. It is an individual capstone project finished within 2 weeks.",
    techStack: "React, JavaScript, SASS, Node.js, Express, MySQL",
  },
  {
    img: img3,
    name: "Project Name",
    category: "Inventory Tracking App",
    description:
      "Delivered a full-stack inventory management system in one week with three teammates using Scrum and Jira, featuring a responsive application for warehouse inventory management that supports efficient and seamless CRUD operations.",
    techStack:
      "React, JavaScript, SASS, Node.js, Express, MySQL, Knex, Scrum, Jira",
  },
  {
    img: img4,
    name: "Project Name",
    category: "Snap App",
    description:
      "Developed a photo-sharing app in three sprints using Scrum. Built a responsive React/Sass front end with filtering, integrated a custom Node.js API for tags, photos, and comments, ensuring seamless functionality and data persistence.",
    techStack: "React, JavaScript, SASS, Node.js, Express",
  },
  {
    img: img5,
    name: "Project Name",
    category: "Highlander Game",
    description:
      "Worked with four teammates to develop a Highlander-themed mini fighting game. Planned with design patterns, OOD diagrams, and database schema before coding.",
    techStack: "WPF, c#, MySQL",
  },
  {
    img: img6,
    name: "Project Name",
    category: "Pet Rescure Charity ETL",
    description:
      "Worked with four teammates to develop a Highlander-themed mini fighting game. Planned with design patterns, OOD diagrams, and database schema before coding.",
    techStack: "Oracel SQL, views, stored procedures, datamart, data ETL",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Portfolio</h2>
          <h3 className={styles.subheading}>Key Projects and Achievements</h3>
        </div>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div className={styles.imgWrap}>
                    <img
                      src={project.img}
                      alt={project.name}
                      className={styles.img}
                    />
                    <div className={styles.hover}>
                      <div className={styles.hoverContent}>
                        <span className={styles.plus}>+</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.caption}>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <div className={styles.cardBack}>
                  <div>
                    <h4 className={styles["cardBack__title"]}>
                      Project Details
                    </h4>
                    <p className={styles["cardBack__des"]}>
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <h4 className={styles["cardBack__title"]}>
                      Tech Stack
                      <span className={styles["cardBack__icon"]}>🚀</span>
                    </h4>
                    <p className={styles["cardBack__tech"]}>
                      {project.techStack}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
