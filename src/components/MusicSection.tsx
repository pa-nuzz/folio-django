"use client";
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Music, Activity, ExternalLink, Headphones, Disc } from 'lucide-react';
import styles from './MusicSection.module.css';

gsap.registerPlugin(ScrollTrigger);

interface Artist {
  id: string;
  name: string;
  images: { url: string }[];
  genres: string[];
  popularity: number;
  followers: number;
  url: string;
}

export default function MusicSection() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/spotify/')
      .then(res => {
        if (!res.ok) throw new Error('Spotify uplink failed');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setArtists(data);
        } else {
          throw new Error('Empty data');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Spotify Fetch Error:", err);
        // Fallback Premium Data
        setArtists([
          { id: '1', name: 'Drake', images: [{ url: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2670&auto=format&fit=crop' }], genres: ['Rap', 'Hip Hop'], popularity: 98, followers: 85000000, url: '#' },
          { id: '2', name: 'The Weeknd', images: [{ url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop' }], genres: ['R&B', 'Pop'], popularity: 96, followers: 74000000, url: '#' },
          { id: '3', name: 'Travis Scott', images: [{ url: 'https://images.unsplash.com/photo-1514525253361-bee8a48790c3?q=80&w=2670&auto=format&fit=crop' }], genres: ['Trap', 'Rap'], popularity: 94, followers: 28000000, url: '#' }
        ]);
        setLoading(false);
      });
  }, []);

  useGSAP(() => {
    if (loading || artists.length === 0) return;

    gsap.from(".artist-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: sectionRef, dependencies: [loading, artists] });

  return (
    <section id="music" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>SIGNAL_FREQUENCY // TOP_ARTISTS</div>
          <h2 className={styles.title}>Sonic <span className="text-gradient">Arsenal</span></h2>
          <p className={styles.subtitle}>Analyzing neural resonance patterns through top-tier acoustic data.</p>
        </div>

        {loading ? (
          <div className={styles.loader}>
            <Activity className={styles.spinner} size={40} />
            <span>Decrypting Spotify Uplink...</span>
          </div>
        ) : (
          <div className={styles.grid} ref={trackRef}>
            {artists.map((artist) => (
              <div key={artist.id} className={`artist-card ${styles.card}`}>
                <div className={styles.imageContainer}>
                  <img src={artist.images[0]?.url} alt={artist.name} className={styles.image} />
                  <div className={styles.imageOverlay} />
                  <div className={styles.popularity}>
                    <Activity size={12} /> {artist.popularity}% MATCH
                  </div>
                </div>
                
                <div className={styles.info}>
                  <h3 className={styles.name}>{artist.name}</h3>
                  <div className={styles.genres}>
                    {artist.genres.slice(0, 2).map(genre => (
                      <span key={genre} className={styles.genreBadge}>{genre}</span>
                    ))}
                  </div>
                  
                  <div className={styles.stats}>
                    <div className={styles.stat}>
                      <span>FOLLOWERS</span>
                      <strong>{(artist.followers / 1000000).toFixed(1)}M</strong>
                    </div>
                  </div>

                  <a href={artist.url} target="_blank" rel="noopener noreferrer" className={styles.spotifyLink}>
                    <Disc size={16} /> OPEN_ARCHIVE <ExternalLink size={12} />
                  </a>
                </div>
                
                {/* Decorative Elements */}
                <div className={styles.decorTL} />
                <div className={styles.decorBR} />
              </div>
            ))}
          </div>
        )}

        <div className={styles.footerNote}>
          <div className={styles.platforms}>
             <Headphones size={18} />
             <span>Syncing with Spotify & Apple Music neural patterns.</span>
          </div>
          <div className={styles.appleSupport}>
            <Disc size={14} className={styles.pulse} />
            <span>Lossless Audio Engine Active</span>
          </div>
        </div>
      </div>
    </section>
  );
}
