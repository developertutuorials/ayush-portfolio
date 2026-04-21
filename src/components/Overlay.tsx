"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 20% to 50%
  const opacity2 = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4, 0.5],
    [0, 1, 1, 0],
  );
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: 50% to 80%
  const opacity3 = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7, 0.8],
    [0, 1, 1, 0],
  );
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-8 md:px-24">
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-lg">
            Ayush
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            Creative Developer.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center pl-8 md:pl-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl text-white drop-shadow-lg">
            I build digital experiences.
          </h2>
          <div className="w-16 h-1 bg-white mt-6 rounded-full" />
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center pr-8 md:pr-24 text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl text-white drop-shadow-lg">
            Bridging design <br /> and engineering.
          </h2>
          <div className="w-16 h-1 bg-white mt-6 rounded-full ml-auto" />
        </motion.div>
      </div>
    </div>
  );
}
