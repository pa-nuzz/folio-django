"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Disc, Headphones, Music2, Heart, ExternalLink, Play, Activity, Sparkles } from 'lucide-react';
import styles from './MusicSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const SPOTIFY_ARTISTS = [
  { id: 1, name: 'The Weeknd', image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&h=400&fit=crop', genre: 'R&B / Pop', popularity: 98 },
  { id: 2, name: 'Drake', image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&h=400&fit=crop', genre: 'Hip Hop / Rap', popularity: 97 },
  { id: 3, name: 'Kanye West', image: 'https://images.unsplash.com/photo-1514525253361-bee8a48790c3?w=400&h=400&fit=crop', genre: 'Hip Hop', popularity: 95 },
  { id: 4, name: 'Travis Scott', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop', genre: 'Trap / Rap', popularity: 94 },
];

const APPLE_PLAYLISTS = [
  { id: 1, name: 'chëmabu', tracks: 47, duration: '3h 12m', color: '#fa2d48' },
  { id: 2, name: 'Late Night Drive', tracks: 32, duration: '2h 8m', color: '#ff9500' },
  { id: 3, name: 'Coding Focus', tracks: 56, duration: '4h 20m', color: '#30d158' },
];

export default function MusicSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".music-header", {
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      y: 60, opacity: 0, duration: 1, ease: "power3.out"
    });

    gsap.from(".spotify-card", {
      scrollTrigger: { trigger: ".platforms-grid", start: "top 70%" },
      x: -60, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out"
    });

    gsap.from(".apple-card", {
      scrollTrigger: { trigger: ".platforms-grid", start: "top 70%" },
      x: 60, opacity: 0, duration: 1, delay: 0.4, ease: "power3.out"
    });

    gsap.from(".artist-item", {
      scrollTrigger: { trigger: ".artists-grid", start: "top 80%" },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out"
    });

    gsap.from(".playlist-item", {
      scrollTrigger: { trigger: ".playlists-grid", start: "top 80%" },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power2.out"
    });
  }, { scope: sectionRef });

  return (
    <section id="music" className={styles.section} ref={sectionRef}>
      <div className={styles.backgroundGlow} />
      
      <div className={styles.container}>
        <div className={`music-header ${styles.header}`}>
          <div className={styles.badge}>
            <Sparkles size={14} />
            SONIC VIBES // ACTIVE
          </div>
          <h2 className={styles.title}>
            My <span className="text-gradient">Soundtrack</span>
          </h2>
          <p className={styles.subtitle}>
            The beats that fuel my code. Top artists from Spotify and curated playlists from Apple Music.
          </p>
        </div>

        <div className="platforms-grid">
          {/* Spotify Side */}
          <div className="spotify-card">
            <div className={`${styles.platformCard} ${styles.spotifyTheme}`}>
              <div className={styles.platformHeader}>
                <div className={styles.platformIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
                <div className={styles.platformInfo}>
                  <h3 className={styles.platformName}>Spotify</h3>
                  <span className={styles.platformSubtitle}>Top Artists</span>
                </div>
                <div className={styles.platformStatus}>
                  <Activity size={12} className={styles.pulse} />
                  Live
                </div>
              </div>

              <div className={`artists-grid ${styles.artistsGrid}`}>
                {SPOTIFY_ARTISTS.map((artist) => (
                  <div key={artist.id} className={`artist-item ${styles.artistCard}`}>
                    <div className={styles.artistImageWrapper}>
                      <img src={artist.image} alt={artist.name} className={styles.artistImage} />
                      <div className={styles.artistOverlay}>
                        <div className={styles.playButton}>
                          <Play size={16} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <div className={styles.artistInfo}>
                      <h4 className={styles.artistName}>{artist.name}</h4>
                      <span className={styles.artistGenre}>{artist.genre}</span>
                      <div className={styles.artistStats}>
                        <Heart size={12} />
                        <span>{artist.popularity}% match</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a 
                href="https://open.spotify.com/user/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.platformLink} ${styles.spotifyLink}`}
              >
                <Disc size={18} />
                Follow on Spotify
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Apple Music Side */}
          <div className="apple-card">
            <div className={`${styles.platformCard} ${styles.appleTheme}`}>
              <div className={styles.platformHeader}>
                <div className={`${styles.platformIcon} ${styles.appleIcon}`}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.197 10.197 0 00-1.564-.15c-.04-.002-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.22.28-.78.17-1.51.465-2.18.896-.89.578-1.53 1.33-1.89 2.31-.23.6-.35 1.22-.382 1.85-.006.153-.014.306-.014.46V17.99c.01.667.09 1.33.24 1.98.32 1.31 1.07 2.31 2.18 3.04.75.48 1.56.77 2.42.91.89.15 1.79.21 2.7.18.13-.01.26-.01.39-.01h11.7c.14 0 .28.01.42.02.86.06 1.71.01 2.55-.16.96-.18 1.87-.51 2.67-1.02.9-.58 1.54-1.35 1.89-2.34.23-.61.35-1.24.39-1.89.02-.26.03-.52.03-.79V6.874c-.01-.25-.02-.5-.04-.75z"/>
                  </svg>
                </div>
                <div className={styles.platformInfo}>
                  <h3 className={styles.platformName}>Apple Music</h3>
                  <span className={styles.platformSubtitle}>My Playlists</span>
                </div>
                <div className={styles.platformStatus}>
                  <Headphones size={12} />
                  Lossless
                </div>
              </div>

              <div className={`playlists-grid ${styles.playlistsGrid}`}>
                {APPLE_PLAYLISTS.map((playlist) => (
                  <div key={playlist.id} className={`playlist-item ${styles.playlistCard}`}>
                    <div className={styles.playlistArtwork} style={{ background: `linear-gradient(135deg, ${playlist.color}20 0%, ${playlist.color}40 100%)` }}>
                      <div className={styles.playlistIcon} style={{ color: playlist.color }}>
                        <Music2 size={32} />
                      </div>
                    </div>
                    <div className={styles.playlistInfo}>
                      <h4 className={styles.playlistName}>{playlist.name}</h4>
                      <div className={styles.playlistMeta}>
                        <span>{playlist.tracks} tracks</span>
                        <span className={styles.dot}>•</span>
                        <span>{playlist.duration}</span>
                      </div>
                    </div>
                    <button className={styles.playlistPlay} style={{ background: playlist.color }}>
                      <Play size={16} fill="white" />
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.embedContainer}>
                <iframe 
                  allow="autoplay *; encrypted-media *; fullscreen *" 
                  frameBorder="0" 
                  height="180" 
                  style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', borderRadius: '12px', background: 'transparent' }} 
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                  src="https://embed.music.apple.com/in/playlist/ch%C3%ABmabu/pl.u-76oNkm7sv3qBJo2"
                />
              </div>

              <a 
                href="https://music.apple.com/in/playlist/ch%C3%ABmabu/pl.u-76oNkm7sv3qBJo2" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.platformLink} ${styles.appleLink}`}
              >
                <Music2 size={18} />
                Listen on Apple Music
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.statusBar}>
          <div className={styles.statusItem}>
            <Disc size={16} className={styles.spinning} />
            <span>Now Playing</span>
          </div>
          <div className={styles.statusDivider} />
          <div className={styles.statusItem}>
            <span className={styles.equalizer}>
              <span></span><span></span><span></span><span></span>
            </span>
            <span>Lossless Audio Active</span>
          </div>
          <div className={styles.statusDivider} />
          <div className={styles.statusItem}>
            <Heart size={14} />
            <span>Syncing Across Devices</span>
          </div>
        </div>
      </div>
    </section>
  );
}
