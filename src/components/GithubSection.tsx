"use client";
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Github, Star, GitFork, ExternalLink, Code, Activity, Layers, Zap, Terminal } from 'lucide-react';
import styles from './GithubSection.module.css';

gsap.registerPlugin(ScrollTrigger);

type Repo = {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  image?: string;
};

// Static repos with images
const STATIC_REPOS: Repo[] = [
  {
    name: 'folio-django',
    description: 'Full-stack portfolio platform with AI chatbot, resume analysis, and OCR capabilities built with Next.js and Django.',
    html_url: 'https://github.com/pa-nuzz/folio-django',
    stargazers_count: 12,
    forks_count: 3,
    language: 'TypeScript',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop'
  },
  {
    name: 'neural-engine',
    description: 'Advanced AI/ML engine utilizing Transformer architectures for predictive analysis and real-time decision making.',
    html_url: 'https://github.com/pa-nuzz',
    stargazers_count: 24,
    forks_count: 7,
    language: 'Python',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2665&auto=format&fit=crop'
  },
  {
    name: 'vision-ocr',
    description: 'Computer vision pipeline for text extraction and image analysis with Tesseract.js and OpenAI integration.',
    html_url: 'https://github.com/pa-nuzz',
    stargazers_count: 18,
    forks_count: 5,
    language: 'JavaScript',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop'
  },
  {
    name: 'quantum-ledger',
    description: 'Post-quantum cryptographic implementation focused on zero-knowledge proofs and smart contracts.',
    html_url: 'https://github.com/pa-nuzz',
    stargazers_count: 31,
    forks_count: 12,
    language: 'Rust',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop'
  }
];

export default function GithubSection() {
  const [repos] = useState<Repo[]>(STATIC_REPOS);
  const [loading, setLoading] = useState(false);
  const [hoveredRepo, setHoveredRepo] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading for smooth animation
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (loading || !trackRef.current || !sectionRef.current) return;

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
        }
      });
    }

    // Reveal Header
    gsap.from(".github-header", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    // Reveal cards
    gsap.from(".repo-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
      },
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: sectionRef, dependencies: [loading] });

  if (loading) {
    return (
      <section id="github" className={styles.section} ref={sectionRef}>
        <div className={styles.loaderContainer}>
          <Activity className={styles.spinner} size={48} />
          <p>Connecting to GitHub...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className={styles.section} ref={sectionRef}>
      <div className={`github-header ${styles.header}`}>
        <div className={styles.badge}>
          <Terminal size={14} />
          OPEN SOURCE // v2.0
        </div>
        <h2 className={styles.title}>Code <span className="text-gradient">Arsenal</span></h2>
        <p className={styles.subtitle}>Neural repositories and experimental prototypes.</p>
      </div>

      <div className={styles.trackContainer}>
        <div className={styles.track} ref={trackRef}>
          {/* Intro Slide */}
          <div className={styles.introSlide}>
            <div className={styles.introIcon}>
              <Github size={64} />
            </div>
            <h3 className={styles.slideTitle}>Code that ships.</h3>
            <p className={styles.slideSubtitle}>
              Scroll to explore repositories, experiments, and open-source contributions.
            </p>
            <div className={styles.introStats}>
              <div className={styles.introStat}>
                <Layers size={20} />
                <span>{repos.length}+ Repos</span>
              </div>
              <div className={styles.introStat}>
                <Zap size={20} />
                <span>Production Ready</span>
              </div>
            </div>
          </div>

          {/* Repo Cards */}
          {repos.map((repo, i) => (
            <div 
              key={i} 
              className={`repo-card ${styles.repoSlide}`}
              onMouseEnter={() => setHoveredRepo(i)}
              onMouseLeave={() => setHoveredRepo(null)}
            >
              <div className={`${styles.repoCard} ${hoveredRepo === i ? styles.repoCardHover : ''}`}>
                {/* Image */}
                <div className={styles.repoImageContainer}>
                  <img 
                    src={repo.image} 
                    alt={repo.name}
                    className={styles.repoImage}
                  />
                  <div className={styles.repoImageOverlay} />
                  <div className={styles.repoNumber}>0{i + 1}</div>
                </div>
                
                <div className={styles.repoContent}>
                  <div className={styles.repoHeader}>
                    <div className={styles.repoIcon}>
                      <Code size={24} />
                    </div>
                    <h3 className={styles.repoName}>{repo.name}</h3>
                  </div>
                  
                  <p className={styles.repoDesc}>{repo.description}</p>
                  
                  <div className={styles.repoStats}>
                    <div className={styles.stat}>
                      <span className={styles.statLabel}>LANGUAGE</span>
                      <span className={styles.statValue}>{repo.language || "TypeScript"}</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statLabel}>
                        <Star size={12} /> STARS
                      </span>
                      <span className={styles.statValue}>{repo.stargazers_count}</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statLabel}>
                        <GitFork size={12} /> FORKS
                      </span>
                      <span className={styles.statValue}>{repo.forks_count}</span>
                    </div>
                  </div>

                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.repoLink}
                  >
                    <span>Explore Code</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Final Slide */}
          <div className={styles.finalSlide}>
            <a 
              href="https://github.com/pa-nuzz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.viewAllLink}
            >
              <Github size={40} />
              <span>View All Repositories</span>
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
