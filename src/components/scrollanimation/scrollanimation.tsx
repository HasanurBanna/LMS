"use client";

import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  animation?:
    | "fade"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "zoom-in"
    | "zoom-out"
    | "rotate-in"
    | "skew-left"
    | "skew-right"
    | "flip-x"
    | "blur-in"
    | "slide-x-skew"
    | "fade-translate"
    | "origin-scale-y"
    | "origin-scale-x"
    | "bounce-up-lg"
    | "stutter-fade"
    | "perspective-zoom"
    | "move-and-fade"
    | "slide-top-left"
    | "slide-top-right"
    | "slide-bottom-left"
    | "slide-bottom-right";
  className?: string;
}

const ScrollAnimation = ({
  children,
  animation = "fade",
  className = "",
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.0 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    // Cleanup function
    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  // ---Tailwind Classes---
  // Initial State (Hidden)
  const hidden = {
    // --- Fade & Slide Animations (01-05) ---
    fade: "opacity-0",
    "slide-up": "opacity-0 translate-y-10",
    "slide-down": "opacity-0 -translate-y-10",
    "slide-left": "opacity-0 -translate-x-10  ",
    "slide-right": "opacity-0 translate-x-10",

    // --- Zoom Animations (06-07) ---
    "zoom-in": "opacity-0 scale-90",
    "zoom-out": "opacity-0 scale-110",

    // --- Rotation & Skew Animations (08-11) ---
    "rotate-in": "opacity-0 rotate-12",
    "skew-left": "opacity-0 translate-x-10 skew-y-6",
    "skew-right": "opacity-0 -translate-x-10 skew-y-6",
    "flip-x": "opacity-0 rotate-x-90",

    // --- Combined Animations (12-14) ---
    "blur-in": "opacity-0 blur-lg",
    "slide-x-skew": "opacity-0 -translate-x-full skew-y-12",
    "fade-translate": "opacity-0 translate-y-5",

    // --- Transform Origin & Deep Effects (15-20) ---
    "origin-scale-y": "opacity-0 scale-y-0 origin-bottom",
    "origin-scale-x": "opacity-0 scale-x-0 origin-left",
    "bounce-up-lg": "opacity-0 translate-y-20",
    "stutter-fade": "opacity-0 scale-95",
    "perspective-zoom": "opacity-0 translate-z-100",
    "move-and-fade": "opacity-0 -translate-y-4 -translate-x-4",

    // --- Corner
    "slide-top-left": "opacity-0 -translate-x-100 -translate-y-10",
    "slide-top-right": "opacity-0 translate-x-100 -translate-y-10",
    "slide-bottom-left": "opacity-0 -translate-x-10 translate-y-10",
    "slide-bottom-right": "opacity-0 translate-x-10 translate-y-10",
  }[animation];

  // Visible State (Animated)
  const visibleClass = {
    // --- Fade & Slide Animations (01-05) ---
    fade: "opacity-100",
    "slide-up": "opacity-100 translate-y-0",
    "slide-down": "opacity-100 translate-y-0",
    "slide-left": "opacity-100 translate-x-0",
    "slide-right": "opacity-100 translate-x-0",

    // --- Zoom Animations (06-07) ---
    "zoom-in": "opacity-100 scale-100",
    "zoom-out": "opacity-100 scale-100",

    // --- Rotation & Skew Animations (08-11) ---
    "rotate-in": "opacity-100 rotate-0",
    "skew-left": "opacity-100 translate-x-0 skew-y-0",
    "skew-right": "opacity-100 translate-x-0 skew-y-0",
    "flip-x": "opacity-100 rotate-x-0",

    // --- Combined Animations (12-14) ---
    "blur-in": "opacity-100 blur-none",
    "slide-x-skew": "opacity-100 translate-x-0 skew-y-0",
    "fade-translate": "opacity-100 translate-y-0",

    // --- Transform Origin & Deep Effects (15-20) ---
    "origin-scale-y": "opacity-100 scale-y-100",
    "origin-scale-x": "opacity-100 scale-x-100",
    "bounce-up-lg": "opacity-100 translate-y-0",
    "stutter-fade": "opacity-100 scale-100",
    "perspective-zoom": "opacity-100 translate-z-0",
    "move-and-fade": "opacity-100 translate-y-0 translate-x-0",

    // --- Corner
    "slide-top-left": "opacity-100 translate-x-0 translate-y-0",
    "slide-top-right": "opacity-100 translate-x-0 translate-y-0",
    "slide-bottom-left": "opacity-100 translate-x-0 translate-y-0",
    "slide-bottom-right": "opacity-100 translate-x-0 translate-y-0",
  }[animation];

  const baseCommon = "transition-all duration-1500 ease-out transform";
  const finalClasses = `${baseCommon} ${className} ${
    visible ? visibleClass : hidden
  }`.trim();

  // Final Render section
  return (
    <div ref={ref} className={`${finalClasses}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
