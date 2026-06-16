"use client";

import { useCallback, useRef, useState } from "react";

type ImageZoomProps = {
  src: string;
  alt: string;
  zoom?: number;
  children?: React.ReactNode;
};

export default function ImageZoom({ src, alt, zoom = 2.5 }: ImageZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoomed, setZoomed] = useState(false);
  const [bgPos, setBgPos] = useState("50% 50%");

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setBgPos(`${x}% ${y}%`);
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden cursor-crosshair"
      onMouseEnter={() => setZoomed(true)}
      onMouseLeave={() => setZoomed(false)}
      onMouseMove={handleMouseMove}
      style={{ aspectRatio: "1 / 1" }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover select-none"
        draggable={false}
      />
      {zoomed && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: `${zoom * 100}%`,
            backgroundPosition: bgPos,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
    </div>
  );
}
