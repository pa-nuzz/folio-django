"use client";
import { useEffect } from 'react';
import { playHoverSound } from '@/utils/SoundUtility';

export default function AudioProvider() {
  useEffect(() => {
    let lastPlayed = 0;
    
    // Unlock AudioContext on first user interaction
    const unlockAudio = () => {
      playHoverSound();
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
    };
    window.addEventListener('click', unlockAudio);
    window.addEventListener('touchstart', unlockAudio);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.glass-panel') ||
        getComputedStyle(target).cursor === 'pointer'
      ) {
        const now = Date.now();
        if (now - lastPlayed < 60) return;
        playHoverSound();
        lastPlayed = now;
      }
    };
    
    document.addEventListener('mouseover', handleMouseOver);
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
    };
  }, []);

  return null;
}
