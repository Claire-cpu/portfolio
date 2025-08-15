import React, { useEffect, useState } from "react";
import styles from "./Typewriter.module.scss";

const Typewriter = ({ text, speed = 120, pause = 1200 }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!deleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (!deleting && index === text.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, speed / 2);
    } else if (deleting && index === 0) {
      timeout = setTimeout(() => setDeleting(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [index, deleting, text, speed, pause]);

  return (
    <span className={styles.typewriter}>
      {displayed}
      <span className={styles.cursor}>|</span>
    </span>
  );
};

export default Typewriter;
