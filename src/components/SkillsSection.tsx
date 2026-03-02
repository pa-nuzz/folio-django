"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Server, Code2, Database } from 'lucide-react';
import styles from './SkillsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const FRONTEND = ["React", "Next.js", "Three.js", "GSAP", "TailwindCSS", "Framer Motion", "TypeScript", "Redux"];
const BACKEND = ["Python", "Django", "FastAPI", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax marquee effect on scroll
    gsap.to(marquee1Ref.current, {
      xPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.to(marquee2Ref.current, {
      xPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.from(".skill-card", {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills-grid-trigger",
        start: "top 80%"
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="skills" className={styles.section} ref={sectionRef}>
      
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee} ref={marquee1Ref}>
          <div className={styles.marqueeTrack}>
            {[...FRONTEND, ...FRONTEND, ...FRONTEND].map((skill, i) => (
              <span key={i} className={styles.marqueeItem}>{skill} <span className={styles.dot}>•</span></span>
            ))}
          </div>
        </div>
        <div className={`${styles.marquee} ${styles.marqueeReverse}`} ref={marquee2Ref}>
          <div className={styles.marqueeTrack}>
            {[...BACKEND, ...BACKEND, ...BACKEND].map((skill, i) => (
              <span key={i} className={styles.marqueeItem}>{skill} <span className={styles.dot}>•</span></span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Technical Arsenal</div>
          <h2 className={styles.title}>Neural <span className="text-gradient">Synapses</span></h2>
          <p className={styles.subtitle}>My technical ecosystem orbiting a core passion for high-performance engineering.</p>
        </div>
        
        <div className={`skills-grid-trigger ${styles.grid}`}>
          <div className={`glass-panel skill-card ${styles.card}`}>
            <Code2 size={36} className={styles.icon} />
            <h3>Frontend Architecture</h3>
            <p>Building cinematic, high-performance user interfaces with modern React, Next.js, and advanced WebGL/Three.js integrations.</p>
          </div>
          
          <div className={`glass-panel skill-card ${styles.card}`}>
            <Server size={36} className={styles.icon} />
            <h3>Backend Systems</h3>
            <p>Designing robust, scalable APIs and microservices using Django, Python, and Node.js for high-throughput applications.</p>
          </div>
          
          <div className={`glass-panel skill-card ${styles.card}`}>
            <Cpu size={36} className={styles.icon} />
            <h3>AI & ML Integration</h3>
            <p>Deploying Large Language Models, PyTorch pipelines, and custom neural networks into production environments.</p>
          </div>
          
          <div className={`glass-panel skill-card ${styles.card}`}>
            <Database size={36} className={styles.icon} />
            <h3>Cloud & DevOps</h3>
            <p>Orchestrating seamless deployments with Docker, AWS infrastructure, and CI/CD automation for zero-downtime shipping.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
