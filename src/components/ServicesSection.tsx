"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ServicesSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Software Engineering",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Django", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS", "CI/CD", "System Architecture"],
    description: "Building robust, scalable digital foundations with modern stacks."
  },
  {
    title: "Design",
    tags: ["UX/UI", "Brand identities", "Custom icons", "Motion Design", "3D Modeling", "Interactive Prototyping", "Design Systems", "Web Graphics"],
    description: "Crafting immersive visual experiences that resonate and engage."
  },
  {
    title: "Automation",
    tags: ["AI Integration", "LLM Pipelines", "Workflow Automation", "Python Scripts", "Bot Development", "API Orchestration", "Data Analysis"],
    description: "Steamlining complex processes with intelligent, automated solutions."
  }
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(`.${styles.card}`);
    
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scrollRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + scrollRef.current?.offsetWidth,
      }
    });

    // Fade in tags
    gsap.from(`.${styles.tag}`, {
      scale: 0.8,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top 20%",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className={styles.wrapper}>
      <div className={styles.intro}>
        <h2 className={styles.mainTitle}>Services</h2>
        <p className={styles.mainSubtitle}>I have one quest. I make it count.</p>
      </div>

      <div ref={scrollRef} className={styles.scrollContainer}>
        <div className={styles.horizontalTrack}>
          {SERVICES.map((service, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <div className={styles.tagCloud}>
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* Large Let's Join Text like Wondermakers */}
          <div className={`${styles.card} ${styles.ctaCard}`}>
            <div className={styles.ctaContent}>
                <div className={styles.cautionBanner}></div>
                <h2 className={styles.ctaText}>Let's join forces.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
