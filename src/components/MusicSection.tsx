"use client";
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Headphones, Disc, ExternalLink } from 'lucide-react';
import styles from './MusicSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function MusicSection() {
  const [activeTab, setActiveTab] = useState<'spotify' | 'apple'>('spotify');
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".music-content", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.from(".music-status", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, { scope: sectionRef });

  return (
    <section id="music" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <Activity size={14} className={styles.pulse} />
            SIGNAL_FREQUENCY // ACTIVE
          </div>
          <h2 className={styles.title}>Sonic <span className="text-gradient">Arsenal</span></h2>
          <p className={styles.subtitle}>Neural resonance patterns through top-tier acoustic data.</p>
        </div>

        {/* Status Indicators */}
        <div className={styles.statusRow}>
          <div className="music-status">
            <Headphones size={20} />
            <span>SYNCING WITH SPOTIFY & APPLE MUSIC</span>
          </div>
          <div className="music-status">
            <Disc size={18} className={styles.spinning} />
            <span>NEURAL PATTERNS DETECTED</span>
          </div>
          <div className="music-status">
            <Activity size={16} />
            <span>LOSSLESS AUDIO ENGINE ACTIVE</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className={styles.tabContainer}>
          <button 
            className={`${styles.tab} ${activeTab === 'spotify' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('spotify')}
          >
            <div className={styles.tabIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div>
            <span>Spotify</span>
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'apple' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('apple')}
          >
            <div className={styles.tabIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.197 10.197 0 00-1.564-.15c-.04-.002-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.22.28-.78.17-1.51.465-2.18.896-.89.578-1.53 1.33-1.89 2.31-.23.6-.35 1.22-.382 1.85-.006.153-.014.306-.014.46V17.99c.01.667.09 1.33.24 1.98.32 1.31 1.07 2.31 2.18 3.04.75.48 1.56.77 2.42.91.89.15 1.79.21 2.7.18.13-.01.26-.01.39-.01h11.7c.14 0 .28.01.42.02.86.06 1.71.01 2.55-.16.96-.18 1.87-.51 2.67-1.02.9-.58 1.54-1.35 1.89-2.34.23-.61.35-1.24.39-1.89.02-.26.03-.52.03-.79V6.874c-.01-.25-.02-.5-.04-.75zm-6.54 10.45c-.22.73-.59 1.36-1.1 1.9-.71.74-1.57 1.14-2.56 1.2-.65.04-1.29-.08-1.88-.39-.42-.22-.83-.45-1.24-.68-.46-.26-.97-.4-1.5-.41-.59-.01-1.14.14-1.65.42-.47.26-.94.52-1.41.78-.55.31-1.14.45-1.76.44-.77-.03-1.45-.26-2.04-.7-.65-.48-1.12-1.09-1.43-1.82-.42-.97-.55-2-.4-3.04.11-.78.35-1.52.71-2.22.47-.92 1.09-1.71 1.89-2.33.62-.48 1.31-.8 2.08-.96.91-.19 1.81-.1 2.68.27.42.18.82.39 1.22.6.49.26 1 .4 1.54.41.69.01 1.33-.16 1.92-.5.42-.23.84-.46 1.25-.69.71-.4 1.48-.57 2.29-.52.85.05 1.63.29 2.32.74.68.44 1.21 1.01 1.62 1.71.41.69.66 1.44.74 2.24.06.54.02 1.08-.1 1.61z"/>
              </svg>
            </div>
            <span>Apple Music</span>
          </button>
        </div>

        {/* Embed Container */}
        <div className="music-content">
          {activeTab === 'spotify' ? (
            <div className={styles.embedContainer}>
              <iframe 
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/34pumPxdJLbY0cmOb8mK7n?utm_source=generator&theme=0" 
                width="100%" 
                height="500" 
                frameBorder="0" 
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className={styles.spotifyEmbed}
              />
            </div>
          ) : (
            <div className={styles.embedContainer}>
              <iframe 
                allow="autoplay *; encrypted-media *;" 
                frameBorder="0" 
                height="500" 
                style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', borderRadius: '12px', background: 'transparent' }} 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/in/playlist/ch%C3%ABmabu/pl.u-76oNkm7sv3qBJo2"
                className={styles.appleEmbed}
              />
            </div>
          )}
        </div>

        {/* Playlist Links */}
        <div className={styles.linksRow}>
          <a 
            href="https://open.spotify.com/playlist/34pumPxdJLbY0cmOb8mK7n" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            <ExternalLink size={16} />
            Open in Spotify
          </a>
          <a 
            href="https://music.apple.com/in/playlist/ch%C3%ABmabu/pl.u-76oNkm7sv3qBJo2" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            <ExternalLink size={16} />
            Open in Apple Music
          </a>
        </div>
      </div>
    </section>
  );
}
