"use client";
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Github, Star, GitFork, ExternalLink, Code, Activity } from 'lucide-react';
import styles from './GithubSection.module.css';

gsap.registerPlugin(ScrollTrigger);

type Repo = {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
};

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/github/')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("GitHub Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  useGSAP(() => {
    if (loading || !trackRef.current || !sectionRef.current || repos.length === 0) return;

    // Horizontal Scroll Logic - similar to Projects
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
  }, { scope: sectionRef, dependencies: [loading, repos.length] });

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
        <div className={styles.badge}>OPEN SOURCE // v1.0</div>
        <h2 className={styles.title}>GitHub <span className="text-gradient">Source</span></h2>
        <p className={styles.subtitle}>Open source repositories and neural prototypes.</p>
      </div>

      <div className={styles.trackContainer}>
        <div className={styles.track} ref={trackRef}>
          {/* Intro Slide */}
          <div className={styles.introSlide}>
            <h3 className={styles.slideTitle}>Code that ships.</h3>
            <p className={styles.slideSubtitle}>
              Scroll to explore repositories, experiments, and open-source contributions.
            </p>
          </div>

          {/* Repo Cards */}
          {repos.map((repo, i) => (
            <div key={i} className={styles.repoSlide}>
              <div className={styles.repoCard}>
                <div className={styles.repoIconLarge}>
                  <Code size={40} />
                </div>
                
                <div className={styles.repoContent}>
                  <div className={styles.repoNumber}>0{i + 1}</div>
                  <h3 className={styles.repoName}>{repo.name}</h3>
                  <p className={styles.repoDesc}>{repo.description || "Experimental neural payload."}</p>
                  
                  <div className={styles.repoStats}>
                    <div className={styles.stat}>
                      <span className={styles.statLabel}>LANGUAGE</span>
                      <span className={styles.statValue}>{repo.language || "TypeScript"}</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statLabel}>STARS</span>
                      <span className={styles.statValue}>
                        <Star size={14} /> {repo.stargazers_count}
                      </span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statLabel}>FORKS</span>
                      <span className={styles.statValue}>
                        <GitFork size={14} /> {repo.forks_count}
                      </span>
                    </div>
                  </div>

                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.repoLink}
                  >
                    View Repository <ExternalLink size={16} />
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
              <Github size={32} />
              <span>View All Repositories</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
