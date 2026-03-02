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
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    gsap.from(".stat-item", {
      scrollTrigger: {
        trigger: ".stats-grid",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });

    gsap.from(".skill-card", {
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out"
    });
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`about-content ${styles.header}`}>
          <span className={styles.badge}>ABOUT ME</span>
          <h2 className={styles.title}>
            Crafting Digital <span className="text-gradient">Excellence</span>
          </h2>
          <p className={styles.subtitle}>
            Full-Stack Developer & AI Specialist with a passion for building 
            scalable, intelligent applications that push boundaries.
          </p>
        </div>

        {/* Stats */}
        <div className={`stats-grid ${styles.stats}`}>
          {STATS.map((stat, idx) => (
            <div key={idx} className={`stat-item ${styles.stat}`}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className={`about-content ${styles.bio}`}>
          <div className={styles.bioText}>
            <p>
              I&apos;m Anuj Don, a passionate developer based in Nepal. I specialize in 
              creating full-stack applications that combine cutting-edge technology 
              with exceptional user experiences.
            </p>
            <p>
              My expertise spans from building responsive frontend interfaces with 
              React and Next.js, to developing robust backend systems with Python and 
              Node.js. I&apos;m particularly fascinated by AI integration and love 
              incorporating machine learning solutions into practical applications.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
              contributing to open-source projects, or creating music playlists that 
              fuel my development sessions.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className={`skills-grid ${styles.skills}`}>
          {SKILLS.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <div key={idx} className={`skill-card ${styles.skillCard}`}>
                <div className={styles.skillIcon}>
                  <IconComponent size={28} />
                </div>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <ul className={styles.skillList}>
                  {skill.items.map((item, i) => (
                    <li key={i} className={styles.skillItem}>
                      <Zap size={12} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`about-content ${styles.cta}`}>
          <p>Have a project in mind?</p>
          <a href="#contact" className={styles.ctaBtn}>
            Let&apos;s Work Together
            <Layers size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
