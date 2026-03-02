"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Code2, Terminal, Cpu, Globe, Zap, Layers } from 'lucide-react';
import styles from './AboutSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Technologies" },
  { value: "100%", label: "Commitment" },
];

const SKILLS = [
  { icon: Code2, name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { icon: Terminal, name: "Backend", items: ["Node.js", "Python", "Django", "FastAPI"] },
  { icon: Cpu, name: "AI & ML", items: ["TensorFlow", "PyTorch", "OpenAI", "LLMs"] },
  { icon: Globe, name: "DevOps", items: ["Docker", "AWS", "CI/CD", "PostgreSQL"] },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".about-content", {
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      y: 60, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
    });
    gsap.from(".stat-item", {
      scrollTrigger: { trigger: ".stats-grid", start: "top 80%" },
      y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out"
    });
    gsap.from(".skill-card", {
      scrollTrigger: { trigger: ".skills-grid", start: "top 80%" },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power2.out"
    });
    gsap.from(".photo-container", {
      scrollTrigger: { trigger: ".photo-container", start: "top 80%" },
      scale: 0.8, opacity: 0, duration: 1, ease: "power3.out"
    });
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`about-content ${styles.header}`}>
          <span className={styles.badge}>ABOUT ME</span>
          <h2 className={styles.title}>Danuzz</h2>
          <p className={styles.subtitle}>Full-Stack Developer & AI Specialist</p>
        </div>

        <div className={styles.mainContent}>
          <div className={`photo-container ${styles.photoSection}`}>
            <div className={styles.photoWrapper}>
              <img src="./photo.jpg" alt="Danuzz" className={styles.photo} />
              <div className={styles.photoGlow}></div>
              <div className={styles.photoRing}></div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <div className={`stats-grid ${styles.stats}`}>
              {STATS.map((stat, idx) => (
                <div key={idx} className={`stat-item ${styles.stat}`}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div className={`about-content ${styles.bio}`}>
              <p>Building digital experiences that matter. I craft scalable applications with modern tech stacks and AI integration.</p>
              <p>Based in Nepal, working globally.</p>
            </div>

            <div className={`skills-grid ${styles.skills}`}>
              {SKILLS.map((skill, idx) => {
                const IconComponent = skill.icon;
                return (
                  <div key={idx} className={`skill-card ${styles.skillCard}`}>
                    <div className={styles.skillIcon}><IconComponent size={28} /></div>
                    <h3 className={styles.skillName}>{skill.name}</h3>
                    <ul className={styles.skillList}>
                      {skill.items.map((item, i) => (
                        <li key={i} className={styles.skillItem}><Zap size={12} />{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`about-content ${styles.cta}`}>
          <a href="#contact" className={styles.ctaBtn}>Let&apos;s Work Together <Layers size={18} /></a>
        </div>
      </div>
    </section>
  );
}
