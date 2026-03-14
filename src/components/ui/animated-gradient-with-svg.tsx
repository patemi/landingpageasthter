"use client";

import React, { useMemo, useRef } from "react";
import { useDimensions } from "@/components/hooks/use-debounced-dimensions";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
}

// Deterministic hash for SSR-safe pseudo-random values.
const hash01 = (seed: string) => {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967295;
};

const range = (seed: string, min: number, max: number) => {
  const t = hash01(seed);
  return min + t * (max - min);
};

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  );

  const blobs = useMemo(
    () =>
      colors.map((color, index) => {
        const base = `${color}-${index}`;
        return {
          color,
          top: `${range(`${base}-top`, 0, 50).toFixed(4)}%`,
          left: `${range(`${base}-left`, 0, 50).toFixed(4)}%`,
          tx1: range(`${base}-tx1`, -0.5, 0.5),
          ty1: range(`${base}-ty1`, -0.5, 0.5),
          tx2: range(`${base}-tx2`, -0.5, 0.5),
          ty2: range(`${base}-ty2`, -0.5, 0.5),
          tx3: range(`${base}-tx3`, -0.5, 0.5),
          ty3: range(`${base}-ty3`, -0.5, 0.5),
          tx4: range(`${base}-tx4`, -0.5, 0.5),
          ty4: range(`${base}-ty4`, -0.5, 0.5),
          sizeScale: range(`${base}-size`, 0.5, 1.5),
        };
      }),
    [colors]
  );

  const blurClass =
    blur === "light"
      ? "blur-2xl"
      : blur === "medium"
      ? "blur-3xl"
      : "blur-[100px]";

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 ${blurClass}`}>
        {blobs.map((blob, index) => (
          <svg
            key={index}
            className="absolute animate-background-gradient"
            style={
              {
                top: blob.top,
                left: blob.left,
                "--background-gradient-speed": `${1 / speed}s`,
                "--tx-1": blob.tx1,
                "--ty-1": blob.ty1,
                "--tx-2": blob.tx2,
                "--ty-2": blob.ty2,
                "--tx-3": blob.tx3,
                "--ty-3": blob.ty3,
                "--tx-4": blob.tx4,
                "--ty-4": blob.ty4,
              } as React.CSSProperties
            }
            width={circleSize * blob.sizeScale}
            height={circleSize * blob.sizeScale}
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="50"
              fill={blob.color}
              className="opacity-[0.15]"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export { AnimatedGradient };
