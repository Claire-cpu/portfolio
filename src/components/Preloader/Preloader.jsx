import React from "react";
import styles from "./Preloader.module.scss";

export default function Preloader() {
  return (
    <div className={styles.preloaderArea}>
      <div className={styles.spinner}>
        <div className={styles.doubleBounce1}></div>
        <div className={styles.doubleBounce2}></div>
      </div>
    </div>
  );
}
