"use client";
import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, Code } from 'lucide-react';
import styles from './GithubSection.module.css';

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

  useEffect(() => {
    fetch('/api/github/') // Adjust if route is different, but Django proxy or direct fetch
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

  if (loading) return null;

  return (
    <section id="github" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>RESOURCE_CONTROL_PROTOCOL</div>
          <h2 className={styles.title}>GitHub <span className="text-gradient">Source</span></h2>
          <p className={styles.subtitle}>Open source repositories and neural prototypes.</p>
        </div>

        <div className={styles.repoList}>
          {repos.map((repo, idx) => (
            <a key={idx} href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.repoItem}>
              <div className={styles.repoMain}>
                <div className={styles.repoIcon}><Code size={20} /></div>
                <div className={styles.repoInfo}>
                  <h3 className={styles.repoName}>{repo.name}</h3>
                  <p className={styles.repoDesc}>{repo.description || "Experimental neural payload without documentation."}</p>
                </div>
              </div>
              
              <div className={styles.repoMeta}>
                <div className={styles.metaBox}>
                  <span className={styles.metaLabel}>LANGUAGE</span>
                  <span className={styles.metaValue}>{repo.language || "ASM"}</span>
                </div>
                <div className={styles.metaBox}>
                  <span className={styles.metaLabel}>STARS</span>
                  <span className={styles.metaValue}><Star size={12} /> {repo.stargazers_count}</span>
                </div>
                <div className={styles.metaBox}>
                  <span className={styles.metaLabel}>FORKS</span>
                  <span className={styles.metaValue}><GitFork size={12} /> {repo.forks_count}</span>
                </div>
                <div className={styles.external}>
                  <ExternalLink size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className={styles.moreRepos}>
          <a href="https://github.com/pa-nuzz" target="_blank" rel="noopener noreferrer" className={styles.ghostBtn}>
            <Github size={18} /> View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
}
