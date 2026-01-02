import {
  Camera,
  Heart,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useRef } from "react";

const photos = [
  {
    id: 1,
    src: "/assets/WhatsApp Image 2026-01-02 at 3.12.37 PM.jpeg",
    alt: "Internship Gallery - NJIT",
  },
  {
    id: 2,
    src: "/assets/WhatsApp Image 2026-01-02 at 3.12.37 PM (1).jpeg",
    alt: "Internship Gallery - NJIT",
  },
  {
    id: 3,
    src: "/assets/WhatsApp Image 2026-01-02 at 3.12.37 PM (2).jpeg",
    alt: "Internship Gallery - NJIT",
  },
  {
    id: 4,
    src: "/assets/WhatsApp Image 2026-01-02 at 3.12.38 PM.jpeg",
    alt: "Internship Gallery - NJIT",
  },
];

const Photography = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="photography" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="section-container px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-primary mb-2 md:mb-3">
            Internships & Projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-3 md:mb-4">
            Gallery
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-4">
            Moments from my internships and experiences at NJIT — exploring
            biotech research, lab work, and collaborative projects.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary">
            <Camera className="w-4 h-4" />
            <span className="font-body text-sm">
              NJIT Biotech & Research Experience
            </span>
          </div>
        </div>

        {/* Photo Gallery - Horizontal Scroll */}
        <div className="relative mb-8 md:mb-12">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-4 md:pb-6 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="flex-shrink-0 w-72 md:w-96 h-72 md:h-96 rounded-xl md:rounded-2xl overflow-hidden hover-lift"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 p-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 p-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 md:p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
              <span className="font-body text-sm md:text-base text-muted-foreground">
                Interested in my research and internship work?
              </span>
            </div>
            <a
              href="mailto:dipanjaliray24@gmail.com?subject=Research and Internship Inquiry"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-body text-sm hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photography;
