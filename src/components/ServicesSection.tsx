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
    description: "Streamlining complex processes with intelligent, automated solutions."
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Simple fade in animation for cards
    const cards = gsap.utils.toArray(`.${styles.card}`);
    
    cards.forEach((card: any, i: number) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: "power3.out"
      });
    });

    // Animate tags
    gsap.from(`.${styles.tag}`, {
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 70%",
      },
      scale: 0.8,
      opacity: 0,
      stagger: 0.03,
      duration: 0.4,
      ease: "back.out(1.5)"
    });
  }, { scope: sectionRef });

  return (
    <section id="services" ref={sectionRef} className={styles.wrapper}>
      <div className={styles.intro}>
        <h2 className={styles.mainTitle}>Services</h2>
        <p className={styles.mainSubtitle}>I have one quest. I make it count.</p>
      </div>

      <div ref={cardsRef} className={styles.cardsContainer}>
        {SERVICES.map((service, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDesc}>{service.description}</p>
              <div className={styles.tagCloud}>
                {service.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {/* CTA Card */}
        <div className={`${styles.card} ${styles.ctaCard}`}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaText}>Let's join<br/>forces.</h2>
            <a href="#contact" className={styles.ctaBtn}>Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
