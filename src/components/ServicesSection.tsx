"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Cpu, Globe, Layers, ArrowRight, Sparkles } from 'lucide-react';
import styles from './ServicesSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: 1,
    icon: Code2,
    title: "Web Development",
    description: "Full-stack applications with React, Next.js, and modern frameworks.",
    tags: ["React", "Next.js", "TypeScript", "Node.js"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    color: "#39ff14"
  },
  {
    id: 2,
    icon: Database,
    title: "Backend Systems",
    description: "Scalable APIs and database architecture for high-performance apps.",
    tags: ["Python", "Django", "PostgreSQL", "FastAPI"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    color: "#00ff41"
  },
  {
    id: 3,
    icon: Cpu,
    title: "AI Integration",
    description: "Machine learning solutions and LLM integration for smart applications.",
    tags: ["OpenAI", "TensorFlow", "LLMs", "Automation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    color: "#00d9ff"
  },
  {
    id: 4,
    icon: Globe,
    title: "DevOps & Cloud",
    description: "Deployment, CI/CD pipelines, and cloud infrastructure management.",
    tags: ["Docker", "AWS", "CI/CD", "Linux"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    color: "#ff9500"
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".services-header", {
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      y: 60, opacity: 0, duration: 1, ease: "power3.out"
    });
    gsap.from(".service-card", {
      scrollTrigger: { trigger: ".services-grid", start: "top 70%" },
      y: 80, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
    });
  }, { scope: sectionRef });

  return (
    <section id="services" ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`services-header ${styles.header}`}>
          <div className={styles.badge}>
            <Sparkles size={14} />
            WHAT I DO
          </div>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.subtitle}>End-to-end development solutions for modern businesses</p>
        </div>

        <div className={`services-grid ${styles.servicesGrid}`}>
          {SERVICES.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className={`service-card ${styles.serviceCard}`}>
                <div className={styles.cardImageWrapper}>
                  <img src={service.image} alt={service.title} className={styles.cardImage} />
                  <div className={styles.cardOverlay} style={{ background: `linear-gradient(135deg, ${service.color}20 0%, transparent 100%)` }} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardIcon} style={{ color: service.color }}>
                    <IconComponent size={28} />
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>{service.description}</p>
                  <div className={styles.cardTags}>
                    {service.tags.map((tag, idx) => (
                      <span key={idx} className={styles.tag} style={{ borderColor: service.color }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.cardGlow} style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}30 0%, transparent 70%)` }} />
              </div>
            );
          })}
        </div>

        <div className={styles.cta}>
          <a href="#contact" className={styles.ctaBtn}>
            Start a Project <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
