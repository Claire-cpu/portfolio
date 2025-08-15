import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Skills.module.scss";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiGnubash,
  SiSpring,
  SiAngular,
  SiExpress,
  SiReact,
  SiJunit5,
  SiJquery,
  SiKnexdotjs,
  SiBootstrap,
  SiMui,
  SiMysql,
  SiMongodb,
  SiAmazondynamodb,
  SiOracle,
  SiApacheairflow,
  SiTalend,
  SiDocker,
  SiAwsamplify,
  SiGooglecloud,
  SiLinux,
} from "react-icons/si";
import {
  FaDatabase,
  FaNetworkWired,
  FaCode,
  FaJava,
  FaChartBar,
  FaWindows,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "C#", icon: FaCode, color: "#239120" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
    ],
  },
  {
    title: "Framework",
    items: [
      { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "JUnit", icon: SiJunit5, color: "#25A162" },
    ],
  },
  {
    title: "Libraries",
    items: [
      { name: "jQuery", icon: SiJquery, color: "#0769AD" },
      { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
      { name: "Knex.js", icon: SiKnexdotjs, color: "#FF5722" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Material-UI", icon: SiMui, color: "#007FFF" },
    ],
  },
  {
    title: "Data",
    items: [
      { name: "Oracle", icon: SiOracle, color: "#F80000" },
      { name: "Microsoft SQL Server", icon: FaDatabase, color: "#CC2927" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
      { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
      { name: "Apache Airflow", icon: SiApacheairflow, color: "#017CEE" },
      { name: "Talend", icon: SiTalend, color: "#0877B9" },
    ],
  },
  {
    title: "DevOps & Platforms",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAwsamplify, color: "#FF9900" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Windows", icon: FaWindows, color: "#0078D6" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Networking", icon: FaNetworkWired, color: "#005A9C" },
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="skills" className={styles.skillsSection} ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={inView ? styles.headingInView : styles.heading}>
            Skills
          </h2>
          {console.log("Skills inView:", inView)}
          <h3 className={inView ? styles.subheadingInView : styles.subheading}>
            Showcase of My Tech Stack & Learning Milestones.
          </h3>
        </div>
        <div className={styles.skillsWhiteBox}>
          <div className={styles.skillsCarousels}>
            {skillCategories.map((cat) => (
              <div className={styles.skillCategory} key={cat.title}>
                <h4
                  className={
                    inView ? styles.categoryTitleInView : styles.categoryTitle
                  }
                >
                  {cat.title}
                </h4>
                <div className={styles.skillsGrid}>
                  {cat.items.map((item, i) => (
                    <span
                      className={
                        inView ? styles.skillItemInView : styles.skillItem
                      }
                      key={i}
                    >
                      <span className={styles.skillIcon}>
                        <item.icon color={item.color} size={32} />
                      </span>
                      <span className={styles.skillName}>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
