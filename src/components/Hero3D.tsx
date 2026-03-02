"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import styles from './Hero3D.module.css';

gsap.registerPlugin(ScrollTrigger);

function WireframeObject() {
  const groupRef = useRef<THREE.Group>(null);
  const frameCount = useRef(0);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Skip frames for performance (render every 2nd frame)
    frameCount.current++;
    if (frameCount.current % 2 !== 0) return;
    
    groupRef.current.rotation.y += 0.003;
    
    // Smoothly follow mouse with simple lerp
    const targetX = (state.mouse.y * Math.PI) / 12;
    const targetY = (state.mouse.x * Math.PI) / 12;
    
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.03);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.03);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef}>
        <mesh>
          <icosahedronGeometry args={[2.5, 1]} />
          <meshBasicMaterial 
            color="#00ff00" 
            wireframe={true} 
            transparent={true}
            opacity={0.3}
          />
        </mesh>
        <mesh scale={[0.95, 0.95, 0.95]}>
           <icosahedronGeometry args={[2.5, 1]} />
           <meshBasicMaterial color="#040406" />
        </mesh>
      </group>
    </Float>
  );
}

export default function Hero3D() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial entrance animation
    const tl = gsap.timeline();
    tl.from(textRef.current!.children, {
      y: 80,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: "expo.out",
      delay: 0.2
    });
    
    tl.fromTo(canvasWrapperRef.current, {
      scale: 0.8,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out"
    }, "-=1");

    // Scrollytelling - fade and scale out text, zoom 3D object
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%", 
        scrub: 1,
        pin: true
      }
    });

    scrollTl.to(textRef.current, {
      y: -100,
      opacity: 0,
      scale: 0.9,
      ease: "none",
      duration: 1
    }, 0);

    scrollTl.to(canvasWrapperRef.current, {
      scale: 1.5,
      y: 100,
      opacity: 0.3,
      ease: "none",
      duration: 1
    }, 0);

  }, { scope: containerRef });

  return (
    <section id="hero" className={styles.hero} ref={containerRef}>
      <div className={styles.canvasContainer} ref={canvasWrapperRef}>
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <Environment preset="city" />
          <WireframeObject />
          <ContactShadows position={[0, -3, 0]} opacity={0.6} scale={15} blur={2.5} far={4} color="#00ff00" />
        </Canvas>
      </div>
      
      <div className={styles.overlay} ref={textRef}>
        <div className={styles.badge}>SYSTEM_IDENTIFIER // NEURAL_MONK</div>
        <h1 className={styles.title}>
          <span className="text-gradient">Architecting</span> the<br /> Digital Future
        </h1>
        <p className={styles.subtitle}>
          Premium Full-Stack Developer & AI Specialist crafting cinematic wireframe experiences with high-end motion design.
        </p>
      </div>
    </section>
  );
}
