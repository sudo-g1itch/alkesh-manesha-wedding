import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface ScrollSystem {
  lenis: Lenis | null;
  /** Register a callback to run every frame (e.g. the Three.js render). */
  onFrame: (cb: (time: number) => void) => void;
}

/**
 * Boot Lenis smooth scrolling and drive a single RAF loop that advances
 * Lenis, updates ScrollTrigger, and runs any registered frame callbacks
 * (the Three.js render). Respects prefers-reduced-motion by skipping Lenis.
 */
export function initScroll(reducedMotion: boolean): ScrollSystem {
  const frameCallbacks: Array<(time: number) => void> = [];
  let lenis: Lenis | null = null;

  // Touch devices scroll natively — running Lenis on top of native momentum
  // causes a settling "jitter" when you stop, and fights the mobile address
  // bar showing/hiding. Only smooth-scroll on non-touch (desktop) pointers.
  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  if (!reducedMotion && !isTouch) {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    // Keep ScrollTrigger in sync with Lenis' virtual scroll position.
    lenis.on("scroll", ScrollTrigger.update);
  }

  // Single RAF loop for everything (time in ms from rAF).
  function raf(time: number) {
    lenis?.raf(time);
    for (const cb of frameCallbacks) cb(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // GSAP ticker should not lag behind Lenis; disable its own smoothing.
  gsap.ticker.lagSmoothing(0);

  return {
    lenis,
    onFrame: (cb) => frameCallbacks.push(cb),
  };
}
