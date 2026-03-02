"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Is it a touch device? Disable custom cursor if it is
    if (window.matchMedia("(pointer: coarse)").matches) {
      cursor.style.display = "none";
      follower.style.display = "none";
      document.body.style.cursor = "auto";
      return;
    }

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });
    
    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3" });
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3" });

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    gsap.ticker.add(() => {
      xToCursor(mouseX);
      yToCursor(mouseY);
      xToFollower(mouseX);
      yToFollower(mouseY);
    });

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 0, duration: 0.2 });
      gsap.to(follower, { scale: 1.5, backgroundColor: 'rgba(0, 240, 255, 0.1)', borderColor: 'var(--accent-blue)', duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(follower, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.5)', duration: 0.3 });
    };

    const attachHoverEvents = () => {
      const interactables = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      interactables.forEach((el) => {
        // Prevent multiple listeners
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    attachHoverEvents();

    const observer = new MutationObserver(attachHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      gsap.ticker.remove(() => {
        xToCursor(mouseX);
        yToCursor(mouseY);
        xToFollower(mouseX);
        yToFollower(mouseY);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={followerRef} className={styles.follower} />
    </>
  );
}
