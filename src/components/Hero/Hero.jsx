import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.scss";
import { handleNavClick } from "../../util/handleNavClick";

const typewriterStrings = [
  "Hi, I am Cara Zhang",
  "I am a Full-stack Developer",
  "I have 1 year experience",
  "Own 6 full-stack projects",
  "I am action-oriented",
  "passionate and compassionate",
];

const Hero = React.forwardRef((props, ref) => {
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [pause, setPause] = useState(false);
  const typingRef = useRef();

  useEffect(() => {
    if (pause) {
      const pauseTimeout = setTimeout(() => setPause(false), 1200);
      return () => clearTimeout(pauseTimeout);
    }
    if (forward && subIndex <= typewriterStrings[index].length) {
      typingRef.current = setTimeout(() => {
        setTyped(typewriterStrings[index].substring(0, subIndex));
        setSubIndex(subIndex + 1);
      }, 80);
    } else if (!forward && subIndex >= 0) {
      typingRef.current = setTimeout(() => {
        setTyped(typewriterStrings[index].substring(0, subIndex));
        setSubIndex(subIndex - 1);
      }, 40);
    } else if (forward && subIndex > typewriterStrings[index].length) {
      setForward(false);
      setPause(true);
    } else if (!forward && subIndex < 0) {
      setForward(true);
      setIndex((index + 1) % typewriterStrings.length);
      setPause(true);
    }
    return () => clearTimeout(typingRef.current);
  }, [subIndex, index, forward, pause]);

  return (
    <section className={styles.hero} id={props.id} ref={ref}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.introTextArea}>
          <div className={styles.introText}>Welcome to my site!</div>
          <div className={styles.typeText}>
            <span>{typed}</span>
            <span className={styles.cursor}>|</span>
          </div>
          <a
            href="#about"
            className={styles.ctaBtn}
            onClick={(e) => handleNavClick(e, "#about")}
          >
            More About Me
          </a>
        </div>
      </div>
    </section>
  );
});
export default Hero;
