"use client";

import { useRef, useState, useEffect } from "react";

type AspectImageProps = {
  src: string;
  alt?: string;
  ratio?: number;
  xPos?: string;
  yPos?: string;
  className?: string;
};

export default function AspectImage({
  src,
  alt = "",
  ratio = 1,
  xPos = "50%",
  yPos = "50%",
  className = "",
}: AspectImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ paddingBottom: `${ratio * 100}%` }}
    >
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: `${xPos} ${yPos}` }}
        />
      )}
    </div>
  );
}
