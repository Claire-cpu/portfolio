import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { handleNavClick } from "../../util/handleNavClick";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const brandText = "Hello";

export default function Navbar({ scrolledPastHero }) {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(brandText.slice(0, i + 1));
      i++;
      if (i === brandText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`${styles.header}  ${
        scrolledPastHero ? styles["header--past"] : ""
      }`}
    >
      <nav className={styles.navbar}>
        <a
          href="#hero"
          className={styles.brand}
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          {typed}
          <span className={styles.cursor}>
            {typed.length < brandText.length ? "|" : ""}
          </span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`${styles["links__label"]} ${
                  scrolledPastHero ? styles["links__label--past"] : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
