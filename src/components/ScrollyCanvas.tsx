"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120;
const INITIAL_FRAMES = 15; // Pehle itne load hote hi show kar do

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, FRAME_COUNT - 1],
  );

  useEffect(() => {
    let loadedCount = 0;

    const loadImage = (i: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        const frameNum = i.toString().padStart(3, "0");
        img.src = `/sequence/frame_${frameNum}_delay-0.066s.webp`;
        img.onload = () => {
          imagesRef.current[i] = img;
          loadedCount++;
          setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
          if (loadedCount === INITIAL_FRAMES) {
            setIsLoaded(true);
            drawFrame(0);
          }
          resolve();
        };
        img.onerror = () => resolve(); // Error pe bhi aage badho
      });
    };

    // Pehle 15 frames load karo turant
    const loadInitial = async () => {
      for (let i = 0; i < INITIAL_FRAMES; i++) {
        await loadImage(i);
      }
      // Baaki background mein
      for (let i = INITIAL_FRAMES; i < FRAME_COUNT; i++) {
        loadImage(i);
      }
    };

    loadInitial();
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    if (!isLoaded) return;
    const handleResize = () => drawFrame(Math.round(frameIndex.get()));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isLoaded) drawFrame(Math.round(latest));
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-50 gap-4">
            <p className="text-white text-sm uppercase tracking-widest animate-pulse">
              Loading Experience...
            </p>
            <div className="w-48 h-[2px] bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-white/50 text-xs">{progress}%</p>
          </div>
        )}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>
    </div>
  );
}
