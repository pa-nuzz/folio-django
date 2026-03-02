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

// Static projects data - works without backend
const STATIC_PROJECTS: Project[] = [
  { 
    id: 1, 
    title: 'Neural Engine Core', 
    description: 'Advanced trading engine utilizing Transformer architectures for predictive market analysis and real-time decision making.', 
    tech_list: ['Python', 'PyTorch', 'Next.js', 'FastAPI'], 
    link: '#', 
    github_link: 'https://github.com/pa-nuzz', 
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    title: 'Synthetic Vision', 
    description: 'Computer vision pipeline for autonomous robotics, rendering environment maps in real-time with depth estimation.', 
    tech_list: ['C++', 'CUDA', 'OpenCV', 'TensorRT'], 
    link: '#', 
    github_link: 'https://github.com/pa-nuzz', 
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    title: 'Quantum Ledger', 
    description: 'Post-quantum cryptographic blockchain implementation focused on zero-knowledge proofs and smart contracts.', 
    tech_list: ['Rust', 'WebAssembly', 'Solidity', 'Substrate'], 
    link: '#', 
    github_link: 'https://github.com/pa-nuzz', 
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop' 
  },
  { 
    id: 4, 
    title: 'AI Portfolio Suite', 
    description: 'Full-stack portfolio platform with AI chatbot, resume analysis, and OCR capabilities built with Next.js.', 
    tech_list: ['Next.js', 'TypeScript', 'OpenAI', 'Tailwind'], 
    link: '#', 
    github_link: 'https://github.com/pa-nuzz/folio-django', 
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop' 
  }
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(STATIC_PROJECTS);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const djangoUrl = process.env.NEXT_PUBLIC_DJANGO_URL;
        
        // Only try backend if URL is configured
        if (djangoUrl) {
          const res = await fetch(`${djangoUrl}/api/projects/`, {
            signal: AbortSignal.timeout(3000)
          }).catch(() => null);
          
          if (res && res.ok) {
            const pData = await res.json();
            if (Array.isArray(pData) && pData.length > 0) {
              setProjects(pData);
            }
          }
        }
      } catch (error) {
        console.log("[INFO] Using static projects data");
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  useGSAP(() => {
    if (loading || !trackRef.current || !sectionRef.current) return;

    const track = trackRef.current;
    const container = containerRef.current;
    if (!container) return;
    
    // Calculate scrollable width
    const scrollWidth = track.scrollWidth - container.offsetWidth;

    if (scrollWidth > 0 && window.innerWidth > 768) {
      // Use container's scroll instead of page scroll
      container.addEventListener('wheel', (e: WheelEvent) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          // Already horizontal scrolling
          return;
        }
        e.preventDefault();
        const currentTransform = gsap.getProperty(track, 'x') as number;
        const newX = Math.max(-scrollWidth, Math.min(0, currentTransform - e.deltaY));
        gsap.to(track, { x: newX, duration: 0.3, ease: 'power2.out' });
      }, { passive: false });
    }

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

  }, { scope: sectionRef, dependencies: [loading] });

  return (
    <section id="projects" className={styles.section} ref={sectionRef}>
      <div className={`section-header ${styles.header}`}>
        <div className={styles.badge}>FEATURED PROJECTS</div>
        <h2 className={styles.title}>Dynamic <span className="text-gradient">Architectures</span></h2>
        <p className={styles.subtitle}>Engineering high-performance neural solutions for the modern web.</p>
      </div>

      {loading ? (
        <div className={styles.loaderContainer}>
          <Activity className={styles.spinner} size={48} />
          <p>Loading projects...</p>
        </div>
      ) : (
        <div className={styles.trackContainer} ref={containerRef}>
          <div className={styles.track} ref={trackRef}>
            
            <div className={styles.introSlide}>
              <h3 className={styles.slideTitle}>Architecting at scale.</h3>
              <p className={styles.slideSubtitle}>
                Scroll to explore systems, AI models, and full-stack platforms.
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
                      Live Demo <ExternalLink size={16} />
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
