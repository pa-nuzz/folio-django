"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Music, Zap, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [fps, setFps] = useState(60);
  const [isOnline, setIsOnline] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // FPS counter with throttling
    let frameCount = 0;
    let startTime = performance.now();
    let request: number;
    let lastFpsUpdate = 0;

    const updateFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      
      // Update FPS every 500ms instead of every second for smoother display
      if (elapsed >= 500) {
        const newFps = Math.round((frameCount * 1000) / elapsed);
        // Only update if significantly different to reduce re-renders
        if (Math.abs(newFps - lastFpsUpdate) > 2) {
          setFps(Math.min(newFps, 144)); // Cap at 144 for display
          lastFpsUpdate = newFps;
        }
        frameCount = 0;
        startTime = currentTime;
      }
      request = requestAnimationFrame(updateFPS);
    };

    request = requestAnimationFrame(updateFPS);
    
    // Online status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      cancelAnimationFrame(request);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#ai-lab', label: 'AI Lab' },
    { href: '#music', label: 'Music', icon: Music },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '/') {
      // Scroll to top for home/logo click
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        {/* Left: Status */}
        <div className={styles.left}>
          <div className={styles.statusIndicator}>
            <div className={`${styles.dot} ${isOnline ? styles.online : styles.offline}`} />
            <div className={styles.statusText}>
              <span className={styles.fpsValue}>{fps}</span>
              <span className={styles.fpsLabel}>FPS</span>
              <span className={styles.divider}>|</span>
              <span className={styles.onlineStatus}>{isOnline ? 'ONLINE' : 'OFFLINE'}</span>
            </div>
          </div>
        </div>

        {/* Center: Logo */}
        <div className={styles.center}>
          <Link href="/" className={styles.logoLink} onClick={(e) => handleNavClick(e, '/')}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/logo.png" 
                alt="Anuj Don" 
                width={45} 
                height={45} 
                className={styles.logo}
                priority
              />
              <div className={styles.logoGlow} />
            </div>
          </Link>
        </div>

        {/* Right: Nav Links */}
        <div className={styles.right}>
          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={styles.mobileNavLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
