"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Palette, Bot, ArrowRight } from 'lucide-react';
import styles from './ServicesSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: "Software Engineering",
    icon: Code2,
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Django", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS", "CI/CD", "System Architecture"],
    description: "Building robust, scalable digital foundations with modern stacks. From concept to deployment."
  },
  {
    title: "Design",
    icon: Palette,
    tags: ["UX/UI", "Brand identities", "Custom icons", "Motion Design", "3D Modeling", "Interactive Prototyping", "Design Systems", "Web Graphics"],
    description: "Crafting immersive visual experiences that resonate and engage. Design that converts."
  },
  {
    title: "Automation",
    icon: Bot,
    tags: ["AI Integration", "LLM Pipelines", "Workflow Automation", "Python Scripts", "Bot Development", "API Orchestration", "Data Analysis"],
    description: "Streamlining complex processes with intelligent, automated solutions. Work smarter."
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
  }, { scope: sectionRef });

  return (
    <section id="services" ref={sectionRef} className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>WHAT I DO</span>
          <h2 className={styles.mainTitle}>Services</h2>
          <p className={styles.mainSubtitle}>I have one quest. I make it count.</p>
        </div>

        <div ref={cardsRef} className={styles.cardsContainer}>
          {SERVICES.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.cardIcon}>
                  <IconComponent size={32} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                  <div className={styles.tagCloud}>
                    {service.tags.slice(0, 6).map((tag, tIdx) => (
                      <span key={tIdx} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* CTA Card */}
          <div className={`${styles.card} ${styles.ctaCard}`}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaText}>Ready to start your project?</h2>
              <a href="#contact" className={styles.ctaBtn}>
                Get in Touch
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
