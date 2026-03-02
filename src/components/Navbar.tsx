"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let frameCount = 0;
    let startTime = performance.now();
    let request: number;

    const updateFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      if (currentTime - startTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - startTime)));
        frameCount = 0;
        startTime = currentTime;
      }
      request = requestAnimationFrame(updateFPS);
    };

    request = requestAnimationFrame(updateFPS);
    return () => cancelAnimationFrame(request);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.statusIndicator}>
          <div className={styles.dot}></div>
          <span className={styles.fps}>{fps} FPS // ONLINE</span>
        </div>
      </div>

      <div className={styles.logoContainer}>
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={40} 
            height={40} 
            className={styles.logo}
            priority
          />
        </Link>
      </div>

      <div className={styles.right}>
        <div className={styles.navLinks}>
          <Link href="#projects" className={styles.navLink}>Projects</Link>
          <Link href="#services" className={styles.navLink}>Services</Link>
          <Link href="#ai-lab" className={styles.navLink}>AI_LAB</Link>
          <Link href="#contact" className={styles.navLink}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
