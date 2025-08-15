import React from "react";
import styles from "./Services.module.scss";
import layers from "../../assets/img/layers.png";
import projectManagement from "../../assets/img/project-management.png";
import dataScience from "../../assets/img/data-science.png";
import aiTech from "../../assets/img/ai-tech.png";

const services = [
  {
    icon: layers,
    title: "Full-Stack Development",
    desc: "Provide full-stack development services, including web development, mobile development, API design, and database design. Optimize applicationperformance.",
  },
  {
    icon: dataScience,
    title: "Data Engineering",
    desc: "Build ETL pipelines, data warehouses, and data lakes to clease and store data. Optimize database performance and create automated workflows to support real-time and batch analytics.",
  },
  {
    icon: aiTech,
    title: "AI Development",
    desc: "Develop AI-powered applications using modern frameworks and APIs. Specialize in integrating AI agents, Large Language Models into full-stack applications.",
  },
  {
    icon: projectManagement,
    title: "Project Management",
    desc: "Lead agile development teams using Scrum methodology and Jira for project tracking. Deliver full-stack projects within tight deadlines. ",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Services</h2>
          <h3 className={styles.subheading}>
            Professional Service Areas I offer
          </h3>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div className={styles.singleService} key={service.title}>
              <img className={styles.iconPlaceholder} src={service.icon} />
              <h4 className={styles.serviceHeading}>{service.title}</h4>
              <p className={styles.serviceDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
