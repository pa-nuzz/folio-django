"use client";
import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import styles from './PassionsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const PASSIONS = [
  {
    id: 'fcb',
    title: 'FC Barcelona',
    category: 'Athletics',
    desc: 'Visca el Barça. More than a club.',
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 'messi',
    title: 'Lionel Messi',
    category: 'Inspiration',
    desc: 'The GOAT. Magic and pure inspiration on the pitch.',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'gt3rs',
    title: 'Porsche 911',
    category: 'Supercars',
    desc: 'Precision engineering meets raw track performance.',
    image: 'https://images.unsplash.com/photo-1503376760361-50f4eadf0e43?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 'ducati',
    title: 'Ducati Panigale V4',
    category: 'Superbikes',
    desc: 'Italian design. Unadulterated speed.',
    image: 'https://images.unsplash.com/photo-1558980394-0a37b6978921?q=80&w=2670&auto=format&fit=crop'
  }
];

export default function PassionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useGSAP(() => {
    gsap.from(".passion-item", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%"
      },
      y: 60,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out"
    });
  }, { scope: sectionRef });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.8,
          ease: "power3.out"
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="passions" className={styles.section} ref={sectionRef}>
      
      {/* Floating Image Reveal */}
      <div 
        ref={imageRef} 
        className={`${styles.imageReveal} ${activeImage ? styles.imageVisible : ''}`}
      >
        {activeImage && <img src={activeImage} alt="Passion" />}
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>Personal Drive</div>
          <h2 className={styles.title}>Beyond the <span className="text-gradient">Screen</span></h2>
          <p className={styles.subtitle}>Engineering is my profession. These are my obsessions.</p>
        </div>

        <div className={styles.list}>
          {PASSIONS.map((item) => (
            <div 
              key={item.id} 
              className={`passion-item ${styles.listItem}`}
              onMouseEnter={() => setActiveImage(item.image)}
              onMouseLeave={() => setActiveImage(null)}
            >
              <div className={styles.itemLeft}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
              </div>
              <div className={styles.itemRight}>
                <p className={styles.itemDesc}>{item.desc}</p>
                <ArrowUpRight className={styles.arrow} size={40} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
