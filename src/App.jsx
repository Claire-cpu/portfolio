import { useRef, useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

export default function App() {
  const heroRef = useRef(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolledPastHero(!entry.isIntersecting); // becomes true when not visible
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <>
      <Navbar scrolledPastHero={scrolledPastHero} />
      <Hero id="hero" ref={heroRef} />
      <About id="about" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Services id="services" />
      <Contact id="contact" />
    </>
  );
}
