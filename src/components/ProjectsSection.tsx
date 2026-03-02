"use client";
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Github, ExternalLink, Activity } from 'lucide-react';
import styles from './ProjectsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  tech_list: string[];
  link: string;
  github_link: string;
  image: string;
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const djangoUrl = process.env.NEXT_PUBLIC_DJANGO_URL || 'http://localhost:8000';
        const res = await fetch(`${djangoUrl}/api/projects/`).catch(() => ({ ok: false, json: () => [] }));
        
        let pData = [];
        if (res.ok) {
          pData = await res.json();
        }
        
        if (pData.length === 0) {
           pData = [
             { id: 1, title: 'Neural Engine Core', description: 'Advanced trading engine utilizing Transformer architectures for predictive market analysis.', tech_list: ['Python', 'PyTorch', 'Next.js', 'Go'], link: '#', github_link: '#', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format&fit=crop' },
             { id: 2, title: 'Synthetic Vision', description: 'Computer vision pipeline for autonomous robotics, rendering environment maps in real-time.', tech_list: ['C++', 'CUDA', 'OpenCV'], link: '#', github_link: '#', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop' },
             { id: 3, title: 'Quantum Ledger', description: 'Post-quantum cryptographic blockchain implementation focused on zero-knowledge proofs.', tech_list: ['Rust', 'WebAssembly', 'Solidity'], link: '#', github_link: '#', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop' }
           ];
        }

        setProjects(pData);
      } catch (error) {
        console.error("Failed to fetch projects data", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  useGSAP(() => {
    if (loading || !trackRef.current || !sectionRef.current) return;

    // Horizontal Scroll Logic
    const track = trackRef.current;
    const scrollWidth = track.scrollWidth - window.innerWidth;

    if (scrollWidth > 0 && window.innerWidth > 768) {
      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: () => ScrollTrigger.refresh()
        }
      });
    }

    // Reveal Header
    gsap.from(".section-header", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    ScrollTrigger.refresh();
  }, { scope: sectionRef, dependencies: [loading, projects.length] });

  return (
    <section id="projects" className={styles.section} ref={sectionRef}>
      <div className={`section-header ${styles.header}`}>
        <div className={styles.badge}>SYSTEM_PROJECTS // v3.0</div>
        <h2 className={styles.title}>Dynamic <span className="text-gradient">Architectures</span></h2>
        <p className={styles.subtitle}>Engineering high-performance neural solutions for the modern web.</p>
      </div>

      {loading ? (
        <div className={styles.loaderContainer}>
          <Activity className={styles.spinner} size={48} />
          <p>Connecting to Neural Grid...</p>
        </div>
      ) : (
        <div className={styles.trackContainer}>
          <div className={styles.track} ref={trackRef}>
            
            <div className={styles.introSlide}>
              <h3 className={styles.slideTitle}>Architecting at scale.</h3>
              <p className={styles.slideSubtitle}>
                Swipe or scroll down to explore systems, AI models, and full-stack platforms.
              </p>
            </div>

            {projects.map((project, i) => (
              <div key={project.id} className={styles.projectSlide}>
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                  <div className={styles.imageOverlay} />
                </div>
                
                <div className={styles.projectInfo}>
                  <div className={styles.projectNumber}>0{i + 1}</div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  
                  <div className={styles.techStack}>
                    {project.tech_list.map(tech => (
                      <span key={tech} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>

                  <div className={styles.projectLinks}>
                    <a href={project.link} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
                      Live System <ExternalLink size={16} />
                    </a>
                    <a href={project.github_link} target="_blank" rel="noreferrer" className={styles.btnSecondary}>
                      Source <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
