"use client";

import { ReactLenis } from 'lenis/react';

type Props = {
  children: React.ReactNode;
};

export default function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis root options={{ lerp: 0.12, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}