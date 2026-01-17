"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import products from "@/data/products";

export default function Hero() {
  const featuredImage = "/cars/fortuner.png"; // add this file to public/cars/fortuner.png

  const slides = [
    {
      id: "featured",
      name: "Toyota Fortuner GR",
      description:
        "Toyota Fortuner GR menawarkan kesan premium dan performa mesin bertenaga.",
      image: featuredImage,
    },
    ...products,
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 4000;

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prev) => (prev + 1) % slides.length),
      delay
    );
    return () => resetTimeout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function resetTimeout() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative h-64 sm:h-80 md:h-96">
            {slides.map((p, i) => (
              <div
                key={p.id ?? p.name}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute left-6 bottom-6 text-white max-w-xl">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    {p.name}
                  </h2>
                  <p className="text-sm sm:text-base">{p.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 text-white rounded-full p-2 hover:bg-white/50"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 text-white rounded-full p-2 hover:bg-white/50"
            aria-label="Next"
          >
            ›
          </button>

          <div className="absolute right-6 bottom-6 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === index ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
